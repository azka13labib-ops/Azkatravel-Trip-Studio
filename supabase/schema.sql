do $$
begin
  create type public.booking_status as enum ('pending', 'confirmed', 'canceled');
exception
  when duplicate_object then null;
end $$;

create table if not exists public.destinations (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  location text not null,
  description text not null,
  highlight text not null,
  hero_image_url text not null,
  gallery_images jsonb not null default '[]'::jsonb,
  experiences jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.packages (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  destination_slug text not null references public.destinations(slug) on update cascade on delete restrict,
  price text not null,
  duration_days integer not null,
  includes jsonb not null default '[]'::jsonb,
  itinerary jsonb not null default '[]'::jsonb,
  hero_image_url text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  phone text not null,
  email text not null,
  package_slug text not null references public.packages(slug) on update cascade on delete restrict,
  travel_date date not null,
  pax integer not null check (pax > 0),
  note text,
  status public.booking_status not null default 'pending',
  created_at timestamptz not null default now()
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.admin_users (
  id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.destinations enable row level security;
alter table public.packages enable row level security;
alter table public.bookings enable row level security;
alter table public.messages enable row level security;
alter table public.admin_users enable row level security;

create policy "Public read destinations"
  on public.destinations
  for select
  using (true);

create policy "Admin insert destinations"
  on public.destinations
  for insert
  with check (auth.uid() in (select id from public.admin_users));

create policy "Admin update destinations"
  on public.destinations
  for update
  using (auth.uid() in (select id from public.admin_users))
  with check (auth.uid() in (select id from public.admin_users));

create policy "Admin delete destinations"
  on public.destinations
  for delete
  using (auth.uid() in (select id from public.admin_users));

create policy "Public read packages"
  on public.packages
  for select
  using (true);

create policy "Admin insert packages"
  on public.packages
  for insert
  with check (auth.uid() in (select id from public.admin_users));

create policy "Admin update packages"
  on public.packages
  for update
  using (auth.uid() in (select id from public.admin_users))
  with check (auth.uid() in (select id from public.admin_users));

create policy "Admin delete packages"
  on public.packages
  for delete
  using (auth.uid() in (select id from public.admin_users));

create policy "Public insert bookings"
  on public.bookings
  for insert
  with check (true);

create policy "Admin read bookings"
  on public.bookings
  for select
  using (auth.uid() in (select id from public.admin_users));

create policy "Admin update bookings"
  on public.bookings
  for update
  using (auth.uid() in (select id from public.admin_users))
  with check (auth.uid() in (select id from public.admin_users));

create policy "Public insert messages"
  on public.messages
  for insert
  with check (true);

create policy "Admin read messages"
  on public.messages
  for select
  using (auth.uid() in (select id from public.admin_users));

create policy "Admin read admin_users"
  on public.admin_users
  for select
  using (auth.uid() in (select id from public.admin_users));

create policy "Admin insert admin_users"
  on public.admin_users
  for insert
  with check (auth.uid() in (select id from public.admin_users));

insert into storage.buckets (id, name, public)
values ('travel-assets', 'travel-assets', true)
on conflict (id) do nothing;

alter table storage.objects enable row level security;

create policy "Public read travel assets"
  on storage.objects
  for select
  using (bucket_id = 'travel-assets');

create policy "Admin upload travel assets"
  on storage.objects
  for insert
  with check (
    bucket_id = 'travel-assets'
    and auth.uid() in (select id from public.admin_users)
  );

create policy "Admin update travel assets"
  on storage.objects
  for update
  using (
    bucket_id = 'travel-assets'
    and auth.uid() in (select id from public.admin_users)
  );

create policy "Admin delete travel assets"
  on storage.objects
  for delete
  using (
    bucket_id = 'travel-assets'
    and auth.uid() in (select id from public.admin_users)
  );
