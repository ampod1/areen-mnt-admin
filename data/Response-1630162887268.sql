SET check_function_bodies = false;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.bsc_customer (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    code integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name jsonb NOT NULL,
    ext_data jsonb,
    deleted_at timestamp with time zone,
    customer_type_id uuid
);
CREATE SEQUENCE public.bsc_customer_code_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.bsc_customer_code_seq OWNED BY public.bsc_customer.code;
CREATE TABLE public.bsc_customer_type (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    code integer NOT NULL,
    label jsonb NOT NULL,
    terms text NOT NULL,
    media jsonb,
    ext_data jsonb,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);
CREATE SEQUENCE public.bsc_customer_type_code_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.bsc_customer_type_code_seq OWNED BY public.bsc_customer_type.code;
CREATE TABLE public.core_user (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    code integer NOT NULL,
    email text NOT NULL,
    phone text,
    passwired text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    ext_data jsonb,
    name jsonb NOT NULL,
    media jsonb,
    deleted_at timestamp with time zone,
    user_type_id uuid,
    customer_id uuid
);
CREATE TABLE public.core_usertype (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    code integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    label jsonb NOT NULL,
    ext_data jsonb,
    deleted_at timestamp with time zone
);
CREATE SEQUENCE public.core_usertype_code_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.core_usertype_code_seq OWNED BY public.core_usertype.code;
CREATE TABLE public.loyal_customer_grade (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    code integer NOT NULL,
    customer_id uuid NOT NULL,
    cutomer_grade_type_id uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);
CREATE SEQUENCE public.loyal_cusomer_grade_code_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.loyal_cusomer_grade_code_seq OWNED BY public.loyal_customer_grade.code;
CREATE TABLE public.loyal_customer_grade_type (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    code integer NOT NULL,
    label jsonb NOT NULL,
    point_limit integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE SEQUENCE public.loyal_customer_grade_type_code_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.loyal_customer_grade_type_code_seq OWNED BY public.loyal_customer_grade_type.code;
CREATE TABLE public.loyal_point_history (
    code integer NOT NULL,
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    points_count integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    customer_id uuid NOT NULL
);
CREATE SEQUENCE public.loyal_point_history_code_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.loyal_point_history_code_seq OWNED BY public.loyal_point_history.code;
CREATE TABLE public.loyal_redeem_option (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    code integer NOT NULL,
    option_type_id uuid NOT NULL,
    label jsonb NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE SEQUENCE public.loyal_redeem_option_code_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.loyal_redeem_option_code_seq OWNED BY public.loyal_redeem_option.code;
CREATE TABLE public.loyal_redeem_option_type (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    code integer NOT NULL,
    label jsonb NOT NULL
);
CREATE SEQUENCE public.loyal_redeem_option_type_code_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.loyal_redeem_option_type_code_seq OWNED BY public.loyal_redeem_option_type.code;
CREATE TABLE public.mnt_address (
    address text NOT NULL,
    lat numeric,
    lng numeric,
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    code integer NOT NULL,
    ext_data jsonb,
    media jsonb,
    unit_id uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE SEQUENCE public.mnt_address_code_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.mnt_address_code_seq OWNED BY public.mnt_address.code;
CREATE TABLE public.mnt_city (
    id uuid NOT NULL,
    code integer NOT NULL,
    label jsonb NOT NULL,
    location jsonb NOT NULL,
    ext_data jsonb NOT NULL,
    media jsonb NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    deleted_at timestamp with time zone NOT NULL
);
CREATE SEQUENCE public.mnt_city_code_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.mnt_city_code_seq OWNED BY public.mnt_city.code;
CREATE TABLE public.mnt_contract (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    unit_id uuid NOT NULL,
    start_date date NOT NULL,
    end_date date NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    code integer NOT NULL
);
CREATE SEQUENCE public.mnt_contract_code_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.mnt_contract_code_seq OWNED BY public.mnt_contract.code;
CREATE TABLE public.mnt_contract_item (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    code integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    contract_id uuid NOT NULL,
    mnt_item_id uuid NOT NULL,
    period_in_monthes integer NOT NULL,
    end_date timestamp with time zone NOT NULL,
    ext_data jsonb,
    cost integer
);
CREATE SEQUENCE public.mnt_contract_item_code_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.mnt_contract_item_code_seq OWNED BY public.mnt_contract_item.code;
CREATE TABLE public.mnt_customer_unit (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    unit_id uuid NOT NULL,
    customer_id uuid NOT NULL,
    code integer NOT NULL,
    ext_data jsonb
);
CREATE SEQUENCE public.mnt_customer_unit_code_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.mnt_customer_unit_code_seq OWNED BY public.mnt_customer_unit.code;
CREATE TABLE public.mnt_item (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    code integer NOT NULL,
    label jsonb NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    default_price numeric NOT NULL,
    default_month_period integer NOT NULL,
    ext_data jsonb,
    deleted_at timestamp with time zone
);
CREATE SEQUENCE public.mnt_items_code_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.mnt_items_code_seq OWNED BY public.mnt_item.code;
CREATE TABLE public.mnt_project (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    code integer NOT NULL,
    site_id uuid NOT NULL,
    label jsonb NOT NULL,
    ext_data jsonb,
    media jsonb,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    city_id uuid
);
CREATE SEQUENCE public.mnt_projects_code_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.mnt_projects_code_seq OWNED BY public.mnt_project.code;
CREATE TABLE public.mnt_request (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    code integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    customer_id uuid NOT NULL,
    ext_data jsonb,
    media jsonb,
    notes text,
    unit_id uuid NOT NULL,
    request_status_id uuid DEFAULT '9369c555-f873-4447-b016-c28dc2d4e1b6'::uuid NOT NULL,
    is_urgent boolean DEFAULT false NOT NULL
);
CREATE TABLE public.mnt_request_assign (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    code integer NOT NULL,
    request_id uuid NOT NULL,
    technician_id uuid NOT NULL,
    ext_data jsonb,
    media jsonb,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    assign_date timestamp with time zone
);
CREATE SEQUENCE public.mnt_request_assign_code_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.mnt_request_assign_code_seq OWNED BY public.mnt_request_assign.code;
CREATE SEQUENCE public.mnt_request_code_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.mnt_request_code_seq OWNED BY public.mnt_request.code;
CREATE TABLE public.mnt_request_item (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    code integer NOT NULL,
    mnt_item_id uuid NOT NULL,
    mnt_request_id uuid NOT NULL,
    ext_data jsonb NOT NULL
);
CREATE SEQUENCE public.mnt_request_item_code_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.mnt_request_item_code_seq OWNED BY public.mnt_request_item.code;
CREATE TABLE public.mnt_request_status (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    code integer NOT NULL,
    request_id uuid NOT NULL,
    req_status_type_id uuid NOT NULL,
    ext_data jsonb,
    media jsonb,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE TABLE public.mnt_request_status_type (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    code integer NOT NULL,
    label jsonb NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE SEQUENCE public.mnt_request_status_code_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.mnt_request_status_code_seq OWNED BY public.mnt_request_status_type.code;
CREATE SEQUENCE public.mnt_request_status_code_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.mnt_request_status_code_seq1 OWNED BY public.mnt_request_status.code;
CREATE TABLE public.mnt_site (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    code integer NOT NULL,
    label jsonb NOT NULL,
    location jsonb,
    ext_data jsonb,
    media jsonb,
    created_at timestamp with time zone DEFAULT now(),
    deleted_at timestamp with time zone
);
CREATE SEQUENCE public.mnt_site_code_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.mnt_site_code_seq OWNED BY public.mnt_site.code;
CREATE TABLE public.mnt_unit (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    project_id uuid NOT NULL,
    unit_number integer NOT NULL,
    code integer NOT NULL,
    ext_data jsonb,
    address_id uuid,
    is_contract_agree boolean DEFAULT false NOT NULL
);
CREATE SEQUENCE public.mnt_unit_code_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.mnt_unit_code_seq OWNED BY public.mnt_unit.code;
CREATE SEQUENCE public.users_code_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.users_code_seq OWNED BY public.core_user.code;
ALTER TABLE ONLY public.bsc_customer ALTER COLUMN code SET DEFAULT nextval('public.bsc_customer_code_seq'::regclass);
ALTER TABLE ONLY public.bsc_customer_type ALTER COLUMN code SET DEFAULT nextval('public.bsc_customer_type_code_seq'::regclass);
ALTER TABLE ONLY public.core_user ALTER COLUMN code SET DEFAULT nextval('public.users_code_seq'::regclass);
ALTER TABLE ONLY public.core_usertype ALTER COLUMN code SET DEFAULT nextval('public.core_usertype_code_seq'::regclass);
ALTER TABLE ONLY public.loyal_customer_grade ALTER COLUMN code SET DEFAULT nextval('public.loyal_cusomer_grade_code_seq'::regclass);
ALTER TABLE ONLY public.loyal_customer_grade_type ALTER COLUMN code SET DEFAULT nextval('public.loyal_customer_grade_type_code_seq'::regclass);
ALTER TABLE ONLY public.loyal_point_history ALTER COLUMN code SET DEFAULT nextval('public.loyal_point_history_code_seq'::regclass);
ALTER TABLE ONLY public.loyal_redeem_option ALTER COLUMN code SET DEFAULT nextval('public.loyal_redeem_option_code_seq'::regclass);
ALTER TABLE ONLY public.loyal_redeem_option_type ALTER COLUMN code SET DEFAULT nextval('public.loyal_redeem_option_type_code_seq'::regclass);
ALTER TABLE ONLY public.mnt_address ALTER COLUMN code SET DEFAULT nextval('public.mnt_address_code_seq'::regclass);
ALTER TABLE ONLY public.mnt_city ALTER COLUMN code SET DEFAULT nextval('public.mnt_city_code_seq'::regclass);
ALTER TABLE ONLY public.mnt_contract ALTER COLUMN code SET DEFAULT nextval('public.mnt_contract_code_seq'::regclass);
ALTER TABLE ONLY public.mnt_contract_item ALTER COLUMN code SET DEFAULT nextval('public.mnt_contract_item_code_seq'::regclass);
ALTER TABLE ONLY public.mnt_customer_unit ALTER COLUMN code SET DEFAULT nextval('public.mnt_customer_unit_code_seq'::regclass);
ALTER TABLE ONLY public.mnt_item ALTER COLUMN code SET DEFAULT nextval('public.mnt_items_code_seq'::regclass);
ALTER TABLE ONLY public.mnt_project ALTER COLUMN code SET DEFAULT nextval('public.mnt_projects_code_seq'::regclass);
ALTER TABLE ONLY public.mnt_request ALTER COLUMN code SET DEFAULT nextval('public.mnt_request_code_seq'::regclass);
ALTER TABLE ONLY public.mnt_request_assign ALTER COLUMN code SET DEFAULT nextval('public.mnt_request_assign_code_seq'::regclass);
ALTER TABLE ONLY public.mnt_request_item ALTER COLUMN code SET DEFAULT nextval('public.mnt_request_item_code_seq'::regclass);
ALTER TABLE ONLY public.mnt_request_status ALTER COLUMN code SET DEFAULT nextval('public.mnt_request_status_code_seq1'::regclass);
ALTER TABLE ONLY public.mnt_request_status_type ALTER COLUMN code SET DEFAULT nextval('public.mnt_request_status_code_seq'::regclass);
ALTER TABLE ONLY public.mnt_site ALTER COLUMN code SET DEFAULT nextval('public.mnt_site_code_seq'::regclass);
ALTER TABLE ONLY public.mnt_unit ALTER COLUMN code SET DEFAULT nextval('public.mnt_unit_code_seq'::regclass);
COPY public.bsc_customer (id, code, created_at, updated_at, name, ext_data, deleted_at, customer_type_id) FROM stdin;
04c2a85e-6e8c-4abb-8154-c640bb96c067	1	2021-07-04 20:52:08.654239+00	2021-07-15 11:38:43.697167+00	{"full": "محمد علوان"}	\N	\N	51bb79f1-661c-4afd-8d88-188dad25f867
1a4d9635-f168-4e24-b1ee-3dfde0e9f360	2	2021-07-06 14:31:38.75237+00	2021-07-15 11:38:54.733971+00	{"full": "احمد سرحان"}	\N	\N	51bb79f1-661c-4afd-8d88-188dad25f867
330ff0cc-d48f-46a4-a05a-b28a7c9fea6c	3	2021-07-08 20:40:19.540865+00	2021-07-15 11:39:00.496341+00	{"full": "مؤمن بيومي"}	\N	\N	1d13d65b-3d24-4d43-96e3-333724a5e970
41a6c2df-9227-4884-8128-dab9e38f04df	6	2021-07-12 13:47:38.192342+00	2021-07-15 11:39:06.777949+00	{"full": "محمد فريد"}	\N	\N	ea3f0d41-f6a6-4ba3-a2ec-5a0bf4ce0ca4
bf24a9dc-b48d-466f-9011-5d287e089891	4	2021-07-12 05:50:46.810856+00	2021-07-15 11:39:18.78004+00	{"full": "حسين عبدالكريم"}	\N	\N	1d13d65b-3d24-4d43-96e3-333724a5e970
b74ca8d4-97b4-40af-956d-8447b9fe2f58	10	2021-07-15 14:36:02.258366+00	2021-07-15 14:36:02.258366+00	{"full": "Ahmed Sarhan"}	{"national_id": 58564855255645}	\N	51bb79f1-661c-4afd-8d88-188dad25f867
05fedc61-0742-4a9b-84f8-27186894eac1	11	2021-07-25 13:22:52.780635+00	2021-07-25 13:22:52.780635+00	{"full": "Signed Upuser"}	{"national_id": 6525655565633265}	\N	ea3f0d41-f6a6-4ba3-a2ec-5a0bf4ce0ca4
a611493f-3782-4b32-9d89-8b4bf92f0526	12	2021-07-27 08:26:41.713932+00	2021-07-27 08:26:41.713932+00	{"full": "karim testin"}	{"national_id": 58556}	\N	51bb79f1-661c-4afd-8d88-188dad25f867
5fe17c06-79d3-4758-bdc6-0cc846ccc6f9	13	2021-08-15 18:05:58.171527+00	2021-08-15 18:05:58.171527+00	{"full": "احمد ادم"}	\N	\N	51bb79f1-661c-4afd-8d88-188dad25f867
fef71423-895a-45c5-9d71-bfa2ad78e6e9	14	2021-08-15 21:49:55.621701+00	2021-08-15 21:49:55.621701+00	{"full": "عميل اول"}	\N	\N	51bb79f1-661c-4afd-8d88-188dad25f867
dffdb128-8c7f-4d59-acce-8b68094dfa10	15	2021-08-15 22:05:24.713542+00	2021-08-15 22:05:24.713542+00	{"full": "عميل ثان"}	\N	\N	1d13d65b-3d24-4d43-96e3-333724a5e970
d377521d-5d46-4b43-82e6-90f90b0af5eb	16	2021-08-16 08:34:03.440727+00	2021-08-16 08:34:03.440727+00	{"full": "عميل جديد متعاقد"}	\N	\N	51bb79f1-661c-4afd-8d88-188dad25f867
109c13d7-3580-44bb-b770-8189d301c498	17	2021-08-16 09:05:36.849358+00	2021-08-16 09:05:36.849358+00	{"full": "خالد محمد"}	\N	\N	51bb79f1-661c-4afd-8d88-188dad25f867
ac8bf6e1-d74e-45e5-beef-4a8ff089444b	18	2021-08-16 16:36:00.168554+00	2021-08-16 16:36:00.168554+00	{"full": "sayed "}	{"national_id": 558585884559525}	\N	1d13d65b-3d24-4d43-96e3-333724a5e970
\.
COPY public.bsc_customer_type (id, code, label, terms, media, ext_data, created_at, updated_at) FROM stdin;
51bb79f1-661c-4afd-8d88-188dad25f867	1	{"ar": "عميل متعاقد", "en": "contracted"}	some contracted terms & conditions here	\N	\N	2021-07-15 11:29:25.194528+00	2021-07-15 11:29:25.194528+00
ea3f0d41-f6a6-4ba3-a2ec-5a0bf4ce0ca4	3	{"ar": "عميل بدون تعاقد", "en": "without_contract"}	with no contract terms & conditions	\N	\N	2021-07-15 11:34:16.163147+00	2021-07-15 11:34:16.163147+00
1d13d65b-3d24-4d43-96e3-333724a5e970	2	{"ar": "عميل شركة اخري", "en": "external "}	external customer terms & conditions	\N	\N	2021-07-15 11:30:48.637836+00	2021-07-15 11:30:48.637836+00
\.
COPY public.core_user (id, code, email, phone, passwired, created_at, updated_at, ext_data, name, media, deleted_at, user_type_id, customer_id) FROM stdin;
857ff610-26be-473a-878b-cec628262b72	16	tech4@test.com	\N	0000	2021-07-12 15:51:54.58283+00	2021-07-12 15:51:54.58283+00	\N	{"full": "تجربة فني"}	\N	\N	76311dea-c1e1-4fa9-be17-a63dc21ae911	\N
12d1077e-8d9f-41b6-993a-12f845d15dda	2	client2@test.com	01062365585	0000	2021-07-06 13:20:58.060517+00	2021-08-11 19:18:27.089+00	{}	{"full": "ahmed sarhan"}	{"profile_img": {"url": "http://res.cloudinary.com/mellw/image/upload/v1627291527/mellw_uploads/blberhgx3itm1clgounx.jpg", "etag": "84fcd7bef969a414df5acd35ba491098", "tags": [], "type": "upload", "bytes": 355486, "width": 2560, "format": "jpg", "height": 1707, "api_key": "329246125839327", "version": 1627291527, "asset_id": "840eaa63ef413a2e973e2f86e4410527", "public_id": "mellw_uploads/blberhgx3itm1clgounx", "signature": "afe7a0fef7f6424c70115937d9fdf90a88c43d27", "created_at": "2021-07-26T09:25:27Z", "secure_url": "https://res.cloudinary.com/mellw/image/upload/v1627291527/mellw_uploads/blberhgx3itm1clgounx.jpg", "version_id": "23255d5dbd73d1ac0b104ac23241c0cd", "placeholder": false, "resource_type": "image", "original_filename": "file"}}	\N	c8ab7590-3172-4bdc-9796-e710fe6850b5	1a4d9635-f168-4e24-b1ee-3dfde0e9f360
04aae9fa-58f0-4d5a-ba82-a5c75af85844	10	client3@test.com	\N	0000	2021-07-12 05:52:15.328008+00	2021-07-12 05:52:15.328008+00	\N	{"full": "Hussien Abdelkarim"}	\N	\N	c8ab7590-3172-4bdc-9796-e710fe6850b5	bf24a9dc-b48d-466f-9011-5d287e089891
dbfc59ec-ccb2-40fd-b53c-22860b9c442f	11	tech@test.com	\N	0000	2021-07-12 07:35:29.807086+00	2021-07-12 07:35:29.807086+00	\N	{"full": "علي سالم"}	\N	\N	76311dea-c1e1-4fa9-be17-a63dc21ae911	\N
98320cb7-4345-4dd8-9baa-f92a9d5b6dc0	15	mohamed@test.com	\N	0000	2021-07-12 15:45:28.338021+00	2021-07-12 15:45:28.338021+00	\N	{"full": "محمد"}	\N	\N	c8ab7590-3172-4bdc-9796-e710fe6850b5	41a6c2df-9227-4884-8128-dab9e38f04df
a6b3ac17-e364-4484-b680-a68916827aee	18	signed@test.com	+201158698595	test1234	2021-07-25 13:22:53.355077+00	2021-07-25 13:23:26.006471+00	{"national_id": 6525655565633265}	{"full": "Signed Upuser"}	\N	\N	c8ab7590-3172-4bdc-9796-e710fe6850b5	05fedc61-0742-4a9b-84f8-27186894eac1
1158d4b1-8503-4698-ad20-76165b8917d2	17	areensarhan15@gmail.com	010685898965	0000	2021-07-15 14:36:06.644405+00	2021-07-25 13:28:51.085781+00	{"national_id": 58564855255645}	{"full": "Ahmed Sarhan"}	{"profile_img": {"url": "http://res.cloudinary.com/mellw/image/upload/v1627219730/mellw_uploads/lhhka6qug5lqkj8ftl1v.png", "etag": "f67f6d58fefa445d388166cf16d040bf", "tags": [], "type": "upload", "bytes": 210610, "width": 613, "format": "png", "height": 472, "api_key": "329246125839327", "version": 1627219730, "asset_id": "24f618eeb74930e26d0ec2f6becd1fbf", "public_id": "mellw_uploads/lhhka6qug5lqkj8ftl1v", "signature": "d8c01516c1be7b822c9299b61e45a0f38655637f", "created_at": "2021-07-25T13:28:50Z", "secure_url": "https://res.cloudinary.com/mellw/image/upload/v1627219730/mellw_uploads/lhhka6qug5lqkj8ftl1v.png", "version_id": "b9a65fd9f69cca179622b9a13d8eb25b", "placeholder": false, "resource_type": "image", "original_filename": "file"}}	\N	c8ab7590-3172-4bdc-9796-e710fe6850b5	b74ca8d4-97b4-40af-956d-8447b9fe2f58
ca8260c5-dec2-4e85-8a99-83487bbaee9f	19	karim@test.com	0112366588	0000	2021-07-27 08:26:43.546955+00	2021-07-27 08:31:34.305014+00	{"national_id": 58556}	{"full": "karim testin"}	\N	\N	c8ab7590-3172-4bdc-9796-e710fe6850b5	a611493f-3782-4b32-9d89-8b4bf92f0526
4b69f241-72bf-4e5c-a746-d57463c75ad2	20	adam@test.com	\N	0000	2021-08-15 18:06:32.950528+00	2021-08-15 18:06:32.950528+00	\N	{"full": "احمد ادم"}	\N	\N	c8ab7590-3172-4bdc-9796-e710fe6850b5	5fe17c06-79d3-4758-bdc6-0cc846ccc6f9
df742c04-482f-4b8c-96b8-2c167db3bc99	9	client@test.com	20156555155655	0000	2021-07-06 20:47:19.566675+00	2021-08-15 21:34:49.104972+00	\N	{"full": "تجربة عميل"}	{"profile_img": {"url": "http://res.cloudinary.com/mellw/image/upload/v1629063287/mellw_uploads/xswj9uubdpbrkaoil1xp.jpg", "etag": "38887d5d4fb4f31e1e89b800edb0f9d3", "tags": [], "type": "upload", "bytes": 97415, "width": 673, "format": "jpg", "height": 456, "api_key": "329246125839327", "version": 1629063287, "asset_id": "23ebd1cf12c9c0e3f0fec79be31c10be", "public_id": "mellw_uploads/xswj9uubdpbrkaoil1xp", "signature": "8bd79b125f42e83aff28ddae84ce53e4fa79c6d2", "created_at": "2021-08-15T21:34:47Z", "secure_url": "https://res.cloudinary.com/mellw/image/upload/v1629063287/mellw_uploads/xswj9uubdpbrkaoil1xp.jpg", "version_id": "a8b6b030c2dcedf9a2c979a94e85d88c", "placeholder": false, "resource_type": "image", "original_filename": "file"}}	\N	c8ab7590-3172-4bdc-9796-e710fe6850b5	04c2a85e-6e8c-4abb-8154-c640bb96c067
34a5ece5-d2db-4d37-bf0f-5a7bb5e789a1	21	client1@test.com	\N	0000	2021-08-15 22:01:52.51728+00	2021-08-15 22:01:52.51728+00	\N	{"full": "عميل اول"}	\N	\N	c8ab7590-3172-4bdc-9796-e710fe6850b5	fef71423-895a-45c5-9d71-bfa2ad78e6e9
b0b4f83d-b5a9-461c-8fcc-9db8ee59a95a	1	test@test.com	01514858422	0000	2021-07-04 20:32:35.946691+00	2021-08-11 16:43:39.370627+00	\N	{"full": "A1 Technician"}	{"profile_img": {"url": "http://res.cloudinary.com/mellw/image/upload/v1628624024/mellw_uploads/u6or7iabhlx78g2pks7t.jpg", "etag": "4ad7f685ca7d13fe6dfe6c1c70482b7a", "tags": [], "type": "upload", "bytes": 101521, "width": 1080, "format": "jpg", "height": 801, "api_key": "329246125839327", "version": 1628624024, "asset_id": "b165ee30afcf971137e9591697213dbe", "public_id": "mellw_uploads/u6or7iabhlx78g2pks7t", "signature": "76be43fd9ede965dd34665a8b6f6fae8bf5b6607", "created_at": "2021-08-10T19:33:44Z", "secure_url": "https://res.cloudinary.com/mellw/image/upload/v1628624024/mellw_uploads/u6or7iabhlx78g2pks7t.jpg", "version_id": "61d2aac0c930e47aa699f97dd9a9fc15", "placeholder": false, "resource_type": "image", "original_filename": "file"}}	\N	76311dea-c1e1-4fa9-be17-a63dc21ae911	04c2a85e-6e8c-4abb-8154-c640bb96c067
f74dc551-00d3-4833-986a-ba36f49e499f	22	clientext@test.com	\N	0000	2021-08-15 22:05:49.047188+00	2021-08-15 22:05:49.047188+00	\N	{"full": "عميل ثان"}	\N	\N	c8ab7590-3172-4bdc-9796-e710fe6850b5	dffdb128-8c7f-4d59-acce-8b68094dfa10
66d0a862-c969-4234-a1de-cf934301353f	23	clientcontract@test.com	\N	0000	2021-08-16 08:35:48.624042+00	2021-08-16 08:35:48.624042+00	\N	{"full": "احمد عبدالكريم"}	\N	\N	c8ab7590-3172-4bdc-9796-e710fe6850b5	d377521d-5d46-4b43-82e6-90f90b0af5eb
f253c61c-bc43-418c-b080-d873f8c17756	24	khaled@test.com	\N	khaled	2021-08-16 09:07:23.67494+00	2021-08-16 10:00:22.985428+00	\N	{"full": "خالد محمد"}	{"profile_img": {"url": "http://res.cloudinary.com/mellw/image/upload/v1629108021/mellw_uploads/wthkkynu6fysh59zhb25.png", "etag": "055a91979264664a1ee12b9453610d82", "tags": [], "type": "upload", "bytes": 32174, "width": 512, "format": "png", "height": 512, "api_key": "329246125839327", "version": 1629108021, "asset_id": "7641a8f335a3573dfa74033df3751849", "public_id": "mellw_uploads/wthkkynu6fysh59zhb25", "signature": "84aab008caebfd4c332e1c85e0b8533d64a82d0c", "created_at": "2021-08-16T10:00:21Z", "secure_url": "https://res.cloudinary.com/mellw/image/upload/v1629108021/mellw_uploads/wthkkynu6fysh59zhb25.png", "version_id": "e794851ed54e131cb938fdb0d9e3fa6e", "placeholder": false, "resource_type": "image", "original_filename": "file"}}	\N	c8ab7590-3172-4bdc-9796-e710fe6850b5	109c13d7-3580-44bb-b770-8189d301c498
07397586-1c73-4c46-a465-e656932cde10	25	tech3@test.com	\N	0000	2021-08-16 10:12:44.805078+00	2021-08-16 10:12:44.805078+00	\N	{"full": "Tech 3"}	\N	\N	76311dea-c1e1-4fa9-be17-a63dc21ae911	\N
8c8d6d13-25f3-4d51-98ad-0a7ef591cd15	26	sayed.homeeg@gmail.com	01001234619	12345	2021-08-16 16:36:00.921684+00	2021-08-16 16:36:00.921684+00	{"national_id": 558585884559525}	{"full": "sayed "}	\N	\N	\N	ac8bf6e1-d74e-45e5-beef-4a8ff089444b
\.
COPY public.core_usertype (id, code, created_at, updated_at, label, ext_data, deleted_at) FROM stdin;
15caa97f-a548-417f-af37-27460ed6049e	1	2021-07-06 09:36:34.639662+00	2021-07-06 09:36:34.639662+00	{"ar": "مدير", "en": "admin"}	\N	\N
c8ab7590-3172-4bdc-9796-e710fe6850b5	2	2021-07-06 09:38:58.198451+00	2021-07-06 09:38:58.198451+00	{"ar": "عميل", "en": "client"}	\N	\N
76311dea-c1e1-4fa9-be17-a63dc21ae911	3	2021-07-06 09:39:26.86903+00	2021-07-06 09:39:26.86903+00	{"ar": "تقني", "en": "technician"}	\N	\N
\.
COPY public.loyal_customer_grade (id, code, customer_id, cutomer_grade_type_id, created_at, updated_at) FROM stdin;
772023e3-6bd6-4ccf-b2ce-c611018561a0	1	330ff0cc-d48f-46a4-a05a-b28a7c9fea6c	8f67d78c-fa23-4f95-8f87-e7fa6c70a56b	2021-07-29 15:24:13.851724+00	2021-07-29 15:24:13.851724+00
3362bb0f-00a6-432d-88c1-e6421bca5c41	2	b74ca8d4-97b4-40af-956d-8447b9fe2f58	264f688d-5e12-4a1d-9626-3fd3cc346ba7	2021-07-29 15:24:26.171569+00	2021-07-29 15:24:26.171569+00
794bd785-0174-48ec-9ce3-24c1cf1529da	3	1a4d9635-f168-4e24-b1ee-3dfde0e9f360	ad4996bc-6bc4-4825-ab2b-0b18d63904a2	2021-07-29 15:24:37.881394+00	2021-07-29 15:24:37.881394+00
d8b1d95b-2470-44b6-a5a4-68c40a774144	4	a611493f-3782-4b32-9d89-8b4bf92f0526	ad4996bc-6bc4-4825-ab2b-0b18d63904a2	2021-07-29 17:07:45.685269+00	2021-07-29 17:07:45.685269+00
\.
COPY public.loyal_customer_grade_type (id, code, label, point_limit, created_at, updated_at) FROM stdin;
ad4996bc-6bc4-4825-ab2b-0b18d63904a2	3	{"ar": "فضي", "en": "silver"}	0	2021-07-29 15:23:17.016885+00	2021-07-29 15:23:17.016885+00
264f688d-5e12-4a1d-9626-3fd3cc346ba7	4	{"ar": "ذهبي", "en": "gold"}	5000	2021-07-29 15:23:40.082708+00	2021-07-29 15:23:40.082708+00
8f67d78c-fa23-4f95-8f87-e7fa6c70a56b	5	{"ar": "بلاتينوم", "en": "platinum"}	10000	2021-07-29 15:24:01.656036+00	2021-07-29 15:24:01.656036+00
\.
COPY public.loyal_point_history (code, id, points_count, created_at, updated_at, customer_id) FROM stdin;
1	c9c56458-81d3-4d32-83df-87a685dc9ef8	10000	2021-07-29 13:21:10.312477+00	2021-07-29 13:21:10.312477+00	330ff0cc-d48f-46a4-a05a-b28a7c9fea6c
2	cd50fcf0-8c3a-4f4e-826e-0fab64f0482e	5000	2021-07-29 13:21:30.878746+00	2021-07-29 13:21:30.878746+00	b74ca8d4-97b4-40af-956d-8447b9fe2f58
3	1c5ae750-7cde-48d8-913c-6b2c7c46d387	2500	2021-07-29 15:17:18.134168+00	2021-07-29 15:17:18.134168+00	1a4d9635-f168-4e24-b1ee-3dfde0e9f360
\.
COPY public.loyal_redeem_option (id, code, option_type_id, label, created_at, updated_at) FROM stdin;
c29cf33e-be18-43a6-b334-35c3d3791de7	1	a61e74cf-9de9-4d32-9e8f-2f118607f697	{"ar": "خصم 20 ريال سعودي", "en": "200 SAR discount"}	2021-07-29 15:17:59.844202+00	2021-07-29 15:17:59.844202+00
\.
COPY public.loyal_redeem_option_type (id, code, label) FROM stdin;
43605a17-c88a-4e6b-a332-6d8516cff8c3	1	{"ar": "بطاقة", "en": "Card"}
eb0607d1-430c-4b9b-9de2-73e575bf9cf9	2	{"ar": "هدية", "en": "Gift"}
a61e74cf-9de9-4d32-9e8f-2f118607f697	3	{"ar": "تخفيض", "en": "Discount"}
\.
COPY public.mnt_address (address, lat, lng, id, code, ext_data, media, unit_id, created_at, updated_at) FROM stdin;
located some where where you can see it hahaha	\N	\N	212c290b-6e03-4b5b-9e63-f3eae2fc91ac	1	\N	\N	5a124cd2-42d3-4dc4-b15e-ee5a179259c9	2021-07-25 09:37:23.246542+00	2021-07-25 09:37:23.246542+00
بجوار مول سيتي ستارز 	30.0744044731555680	31.3424608119333570	538952c8-43fc-4775-a629-524122d212ae	2	\N	\N	aca85a95-125a-4907-b63c-6580d3723900	2021-08-11 16:56:47.370275+00	2021-08-11 16:56:47.370275+00
وحدة خارجية	\N	\N	2e2f7235-5024-493a-993d-a26bd864ed47	3	\N	\N	bdaa00fe-f3a0-4203-aa28-2b34fc7b7136	2021-08-15 22:08:36.300626+00	2021-08-15 22:08:36.300626+00
test	\N	\N	1f0915e1-c94d-475f-9426-a49e7a4f1de4	4	\N	\N	0707da2c-7cdc-4cbe-9fe1-d33018a5f0c6	2021-08-15 22:36:47.155053+00	2021-08-15 22:36:47.155053+00
ee	\N	\N	be271a65-7609-4e68-a813-d55fabd7e203	5	\N	\N	0707da2c-7cdc-4cbe-9fe1-d33018a5f0c6	2021-08-15 22:39:50.777685+00	2021-08-15 22:39:50.777685+00
\.
COPY public.mnt_city (id, code, label, location, ext_data, media, created_at, updated_at, deleted_at) FROM stdin;
\.
COPY public.mnt_contract (id, unit_id, start_date, end_date, created_at, updated_at, code) FROM stdin;
5e1da7cd-54f6-4fec-be50-a9b861e4ea8d	aca85a95-125a-4907-b63c-6580d3723900	2021-07-13	2023-10-26	2021-07-13 09:52:26.767521+00	2021-07-13 09:52:26.767521+00	1
895c2a24-9d85-4ee9-8cb0-bb8638c9b467	f8cd3e89-906e-44bd-8bda-91657d930456	2021-07-04	2025-06-16	2021-07-13 09:54:58.241935+00	2021-07-13 09:54:58.241935+00	2
6264ce33-6f54-4390-ba75-f00a99dbddd3	eefaac3c-0edf-4440-a705-98d565aa5c6c	2021-07-08	2023-10-27	2021-07-13 09:55:20.285074+00	2021-07-13 09:55:20.285074+00	3
a525ac21-a148-4ce8-9e11-93040cc5bb9e	83a09fa5-058e-422d-9840-0dc47e380f92	2018-10-25	2022-10-20	2021-07-13 09:55:43.223557+00	2021-07-13 09:55:43.223557+00	4
f5bdd72b-1dd1-40f3-9d19-c0f7737309ee	5a124cd2-42d3-4dc4-b15e-ee5a179259c9	2022-10-19	2026-12-31	2021-07-13 09:56:10.361848+00	2021-07-13 09:56:10.361848+00	5
a7bf1bd8-7fc0-4a6a-bcd2-e2b32c08c73a	bdaa00fe-f3a0-4203-aa28-2b34fc7b7136	2020-01-19	2027-12-31	2021-07-13 13:09:20.541141+00	2021-07-13 13:09:20.541141+00	6
9327faf7-6432-45df-9673-f8101fd6011c	c250e883-dc99-49ab-acae-6fc92d3ddd0f	2021-08-05	2021-10-06	2021-08-05 12:41:48.814572+00	2021-08-05 12:41:48.814572+00	7
41a5903c-e7c2-4b34-9b48-3ef0b7eec021	f68de2b7-06ae-4564-bae1-baf38fbfe22e	2021-08-15	2022-08-15	2021-08-15 18:25:32.954404+00	2021-08-15 18:25:32.954404+00	8
2eef2a97-8b75-46e5-8b98-be579e29511a	231d3e6a-1cf5-437e-9828-99a757117e03	2021-08-15	2022-08-16	2021-08-16 08:39:29.372213+00	2021-08-16 08:39:29.372213+00	9
cb44a57d-2433-46a2-9c5d-e6ac525a18f4	c09992ee-1672-41df-8a93-a6a86031cb88	2021-08-15	2022-08-16	2021-08-16 09:10:52.837987+00	2021-08-16 09:10:52.837987+00	10
\.
COPY public.mnt_contract_item (id, code, created_at, updated_at, contract_id, mnt_item_id, period_in_monthes, end_date, ext_data, cost) FROM stdin;
4871a889-bf5a-450c-976a-e3be91995ea7	4	2021-07-26 12:56:24.759556+00	2021-07-26 12:56:24.759556+00	5e1da7cd-54f6-4fec-be50-a9b861e4ea8d	9cc0aefe-91dd-4f32-a165-64625a10400f	7	2021-07-27 00:00:00+00	\N	\N
1e237a86-ee12-4615-877c-d1cc8b5902d4	6	2021-07-27 12:18:32.848168+00	2021-07-27 12:18:32.848168+00	895c2a24-9d85-4ee9-8cb0-bb8638c9b467	bdd3672a-dbf9-40d2-81fe-34b4edb3f9d3	8	2021-08-28 00:00:00+00	\N	\N
6081eee9-a445-46cd-8e0c-075dab99d598	3	2021-07-26 12:53:32.237906+00	2021-07-29 09:10:07.316989+00	5e1da7cd-54f6-4fec-be50-a9b861e4ea8d	8cf2ab02-251c-445a-bc98-7b5fe90c419e	5	2021-10-26 00:00:00+00	\N	-50
e17eed63-c6df-4f81-b537-123440674362	7	2021-08-05 12:33:57.72618+00	2021-08-05 12:33:57.72618+00	895c2a24-9d85-4ee9-8cb0-bb8638c9b467	9cc0aefe-91dd-4f32-a165-64625a10400f	18	2022-01-05 00:00:00+00	\N	\N
8b3da35f-aa06-456c-bb72-c367d025bd98	8	2021-08-15 18:26:45.641811+00	2021-08-15 18:26:45.641811+00	41a5903c-e7c2-4b34-9b48-3ef0b7eec021	99513166-3167-4d66-90e8-05f3ba22179f	24	2021-08-15 00:00:00+00	\N	\N
4f65f1df-11bc-49d2-a661-fb7a2eb35f54	10	2021-08-15 18:38:42.885089+00	2021-08-15 18:38:42.885089+00	41a5903c-e7c2-4b34-9b48-3ef0b7eec021	9cc0aefe-91dd-4f32-a165-64625a10400f	12	2021-08-15 00:00:00+00	\N	\N
b76dcd95-f662-4e2b-9573-03c6c0905bff	11	2021-08-16 08:40:19.620982+00	2021-08-16 08:40:19.620982+00	2eef2a97-8b75-46e5-8b98-be579e29511a	8cf2ab02-251c-445a-bc98-7b5fe90c419e	12	2021-08-15 00:00:00+00	\N	\N
c22def24-ac25-4b31-8e83-f6e70dfc606a	12	2021-08-16 08:40:48.873154+00	2021-08-16 08:40:48.873154+00	2eef2a97-8b75-46e5-8b98-be579e29511a	9cc0aefe-91dd-4f32-a165-64625a10400f	12	2021-08-15 00:00:00+00	\N	\N
936b37e6-e098-4454-9757-a97926202570	13	2021-08-16 09:11:35.126542+00	2021-08-16 09:11:35.126542+00	cb44a57d-2433-46a2-9c5d-e6ac525a18f4	8cf2ab02-251c-445a-bc98-7b5fe90c419e	12	2021-08-15 00:00:00+00	\N	\N
d384f529-6295-4168-8413-1ec4d86371b6	14	2021-08-16 09:11:58.477111+00	2021-08-16 09:11:58.477111+00	cb44a57d-2433-46a2-9c5d-e6ac525a18f4	99513166-3167-4d66-90e8-05f3ba22179f	12	2021-08-15 00:00:00+00	\N	\N
\.
COPY public.mnt_customer_unit (id, created_at, updated_at, unit_id, customer_id, code, ext_data) FROM stdin;
f3eb7d3b-0ec1-4821-b1a1-fdcc49730e62	2021-07-06 14:41:18.443897+00	2021-07-06 14:41:18.443897+00	aca85a95-125a-4907-b63c-6580d3723900	1a4d9635-f168-4e24-b1ee-3dfde0e9f360	1	\N
9e9a148a-6e77-4873-baac-da8824111e1c	2021-07-11 15:09:52.193026+00	2021-07-11 15:09:52.193026+00	eefaac3c-0edf-4440-a705-98d565aa5c6c	330ff0cc-d48f-46a4-a05a-b28a7c9fea6c	3	\N
affd72d9-c87b-4c27-980e-1770e3a8c5b0	2021-07-12 05:51:25.885598+00	2021-07-12 05:51:25.885598+00	83a09fa5-058e-422d-9840-0dc47e380f92	bf24a9dc-b48d-466f-9011-5d287e089891	4	\N
179567e1-646d-4f09-b701-8ff00f79f11a	2021-07-12 11:19:27.425142+00	2021-07-12 11:19:27.425142+00	f8cd3e89-906e-44bd-8bda-91657d930456	04c2a85e-6e8c-4abb-8154-c640bb96c067	5	\N
a00e1d09-c9f1-4296-a22d-9aea26dffd92	2021-07-12 15:48:06.603592+00	2021-07-12 15:48:06.603592+00	5a124cd2-42d3-4dc4-b15e-ee5a179259c9	41a6c2df-9227-4884-8128-dab9e38f04df	8	\N
8bc6d5b9-0858-408d-8127-192805209f1e	2021-07-13 13:08:55.505794+00	2021-07-13 13:08:55.505794+00	bdaa00fe-f3a0-4203-aa28-2b34fc7b7136	1a4d9635-f168-4e24-b1ee-3dfde0e9f360	9	\N
bedf564a-2e5a-481a-85d9-30a2467423df	2021-07-24 23:16:22.078696+00	2021-07-24 23:16:47.954558+00	2147b360-b72b-4109-80f4-f9cda2353df6	41a6c2df-9227-4884-8128-dab9e38f04df	10	\N
cf57b5ac-e00d-49ad-b433-a3070fa4ca55	2021-07-25 09:04:17.962939+00	2021-07-25 09:04:17.962939+00	f8cd3e89-906e-44bd-8bda-91657d930456	b74ca8d4-97b4-40af-956d-8447b9fe2f58	16	\N
8bff316f-383a-488f-b25b-02361f4a2a82	2021-07-25 09:11:24.722757+00	2021-07-25 09:11:24.722757+00	83a09fa5-058e-422d-9840-0dc47e380f92	b74ca8d4-97b4-40af-956d-8447b9fe2f58	21	\N
2d31ab26-915c-4aa5-a8b8-6169190ef499	2021-07-25 09:11:51.50959+00	2021-07-25 09:11:51.50959+00	5a124cd2-42d3-4dc4-b15e-ee5a179259c9	b74ca8d4-97b4-40af-956d-8447b9fe2f58	22	\N
85f99419-9fd7-499d-8434-a61747365397	2021-07-25 13:48:01.825952+00	2021-07-25 13:48:01.825952+00	2147b360-b72b-4109-80f4-f9cda2353df6	b74ca8d4-97b4-40af-956d-8447b9fe2f58	24	\N
9f54769c-025f-45d5-8436-c3d290b4e4fc	2021-07-26 10:11:47.908716+00	2021-07-26 10:11:47.908716+00	83a09fa5-058e-422d-9840-0dc47e380f92	1a4d9635-f168-4e24-b1ee-3dfde0e9f360	26	\N
8e919af9-8e75-474d-a0f2-40f78c011038	2021-07-27 08:33:30.874187+00	2021-07-27 08:33:30.874187+00	c250e883-dc99-49ab-acae-6fc92d3ddd0f	a611493f-3782-4b32-9d89-8b4bf92f0526	27	\N
ac778101-3fb5-4381-8f3e-c9418b803151	2021-08-05 12:38:22.893079+00	2021-08-05 12:38:22.893079+00	c250e883-dc99-49ab-acae-6fc92d3ddd0f	a611493f-3782-4b32-9d89-8b4bf92f0526	28	\N
c3bfbf6d-a479-4a90-83f5-24050243e27a	2021-08-15 18:09:45.900738+00	2021-08-15 18:09:45.900738+00	f68de2b7-06ae-4564-bae1-baf38fbfe22e	5fe17c06-79d3-4758-bdc6-0cc846ccc6f9	29	\N
13ac876e-7536-4561-816e-60b2c937a178	2021-08-15 22:03:39.444578+00	2021-08-15 22:03:39.444578+00	0a1e6202-6e8c-4951-9597-18374688abc3	fef71423-895a-45c5-9d71-bfa2ad78e6e9	30	\N
ccda332f-adb7-4681-b97e-c245222adc56	2021-08-15 22:08:36.298971+00	2021-08-15 22:08:36.298971+00	bdaa00fe-f3a0-4203-aa28-2b34fc7b7136	dffdb128-8c7f-4d59-acce-8b68094dfa10	31	\N
b65410d8-ad6b-4421-8945-166975bdee0d	2021-08-15 22:39:50.776515+00	2021-08-15 22:39:50.776515+00	0707da2c-7cdc-4cbe-9fe1-d33018a5f0c6	dffdb128-8c7f-4d59-acce-8b68094dfa10	33	\N
1a3ce427-287c-4b03-b15e-975ca310aaf2	2021-08-16 10:01:35.534532+00	2021-08-16 10:01:35.534532+00	c09992ee-1672-41df-8a93-a6a86031cb88	109c13d7-3580-44bb-b770-8189d301c498	34	\N
c6023d5b-b223-4b28-8bd3-ccc28a897c66	2021-08-16 16:41:35.051666+00	2021-08-16 16:41:35.051666+00	5a124cd2-42d3-4dc4-b15e-ee5a179259c9	04c2a85e-6e8c-4abb-8154-c640bb96c067	35	\N
\.
COPY public.mnt_item (id, code, label, created_at, updated_at, default_price, default_month_period, ext_data, deleted_at) FROM stdin;
2f8dd894-902a-45d8-bcda-67085724a0f2	2	{"ar": "سباكة", "en": "Plumbing"}	2021-07-06 12:09:09.834383+00	2021-07-11 14:33:41.729331+00	300.0	6	\N	\N
9cc0aefe-91dd-4f32-a165-64625a10400f	3	{"ar": "نجارة", "en": "Carpentry"}	2021-07-06 12:09:33.717798+00	2021-07-11 14:33:48.776374+00	250.0	12	\N	\N
bdd3672a-dbf9-40d2-81fe-34b4edb3f9d3	4	{"ar": "تكييف", "en": "Air Conditions"}	2021-07-06 12:10:15.098668+00	2021-07-11 14:33:59.885192+00	400.0	24	\N	\N
8cf2ab02-251c-445a-bc98-7b5fe90c419e	5	{"ar": "صيانة حدائق", "en": "Gardens Manitenance"}	2021-07-11 15:07:06.780342+00	2021-07-11 15:07:06.780342+00	400.0	12	\N	\N
99513166-3167-4d66-90e8-05f3ba22179f	6	{"ar": "دهانات", "en": "Painting"}	2021-08-10 10:59:49.67722+00	2021-08-10 10:59:49.67722+00	500.0	24	\N	\N
\.
COPY public.mnt_project (id, code, site_id, label, ext_data, media, created_at, updated_at, city_id) FROM stdin;
82fd80a4-c1e3-4973-bb49-3e608028264c	1	3c463de5-c420-4ff8-be3f-9a28e7e7c757	{"ar": "المشروع الاول", "en": "First Proj"}	\N	\N	2021-07-06 14:37:03.185275+00	2021-08-15 18:11:20.178147+00	\N
2a1543b7-14db-49a7-877b-34286ed46903	3	3c463de5-c420-4ff8-be3f-9a28e7e7c757	{"ar": "المشروع الثاني", "en": "Second Proj"}	\N	\N	2021-07-27 08:32:35.99605+00	2021-08-15 18:11:42.516925+00	\N
0fe11c28-5035-4fd4-a1eb-d32b3844a0d1	4	3c463de5-c420-4ff8-be3f-9a28e7e7c757	{"ar": "وحدات خارجية", "en": "External Units"}	\N	\N	2021-08-15 22:09:48.450635+00	2021-08-15 22:09:48.450635+00	\N
\.
COPY public.mnt_request (id, code, created_at, updated_at, customer_id, ext_data, media, notes, unit_id, request_status_id, is_urgent) FROM stdin;
49b7f79d-1fa6-4fe2-b36b-1d24f3d350fe	76	2021-07-27 12:29:24.894285+00	2021-07-27 12:29:24.894285+00	04c2a85e-6e8c-4abb-8154-c640bb96c067	\N	\N	Notes on Request	f8cd3e89-906e-44bd-8bda-91657d930456	9369c555-f873-4447-b016-c28dc2d4e1b6	t
1bfb5a2f-206f-40a4-ac52-c244fdd911fc	77	2021-08-11 09:03:46.853109+00	2021-08-11 09:03:46.853109+00	04c2a85e-6e8c-4abb-8154-c640bb96c067	\N	\N	test the request	f8cd3e89-906e-44bd-8bda-91657d930456	9369c555-f873-4447-b016-c28dc2d4e1b6	t
da51b8b3-346c-42e4-a9b2-6b5e822d4fbd	68	2021-07-14 13:52:03.070683+00	2021-08-11 13:19:35.311538+00	1a4d9635-f168-4e24-b1ee-3dfde0e9f360	\N	\N	this is my second request of the same service	aca85a95-125a-4907-b63c-6580d3723900	9369c555-f873-4447-b016-c28dc2d4e1b6	t
296c7377-c802-46f0-8dce-0f90431c43ea	57	2021-07-12 11:42:51.261413+00	2021-08-15 13:40:22.965571+00	04c2a85e-6e8c-4abb-8154-c640bb96c067	{"customer_rate": 4, "customer_rate_notes": "ممتاز"}	\N	ip ip u	f8cd3e89-906e-44bd-8bda-91657d930456	49cc98cd-e76b-4518-9bc4-e72cda6b89ed	f
ff369071-36ef-4b8b-8eb5-1f0e5539a121	78	2021-08-15 16:08:04.982784+00	2021-08-15 16:08:04.982784+00	04c2a85e-6e8c-4abb-8154-c640bb96c067	\N	\N	Tested 15 Aug	f8cd3e89-906e-44bd-8bda-91657d930456	9369c555-f873-4447-b016-c28dc2d4e1b6	f
e62d6837-034d-4288-ab6b-db5163394170	79	2021-08-15 18:41:35.953673+00	2021-08-15 19:07:49.838606+00	5fe17c06-79d3-4758-bdc6-0cc846ccc6f9	{"customer_rate": 1}	\N	إضافة ملحوظة	f68de2b7-06ae-4564-bae1-baf38fbfe22e	49cc98cd-e76b-4518-9bc4-e72cda6b89ed	f
651cdaa1-280c-4823-bf1d-1250b8df41dd	80	2021-08-15 19:08:43.734532+00	2021-08-15 19:12:28.607329+00	5fe17c06-79d3-4758-bdc6-0cc846ccc6f9	{"reRequested": true}	\N	إضافة ملحوظة	f68de2b7-06ae-4564-bae1-baf38fbfe22e	49cc98cd-e76b-4518-9bc4-e72cda6b89ed	f
86c2efbb-4cab-4377-abeb-e0bb73c47b03	81	2021-08-16 10:11:43.849896+00	2021-08-16 10:16:39.699808+00	109c13d7-3580-44bb-b770-8189d301c498	{"customer_rate": 5, "customer_rate_notes": "الخدمة جيدة جداً"}	\N	شحن فريون المكيفات	c09992ee-1672-41df-8a93-a6a86031cb88	49cc98cd-e76b-4518-9bc4-e72cda6b89ed	f
b6522e33-14de-4066-80a6-c30d195f076d	71	2021-07-14 14:01:41.659776+00	2021-07-26 09:35:16.52459+00	1a4d9635-f168-4e24-b1ee-3dfde0e9f360	{"reRequested": true}	\N	revalidate refetech after remake	aca85a95-125a-4907-b63c-6580d3723900	90d8232e-ee6d-40ce-ac37-9fd3cbc86212	f
4a554f5c-dada-47ae-8a2f-f74522f4f699	42	2021-07-12 06:01:58.605786+00	2021-07-26 10:46:14.130601+00	bf24a9dc-b48d-466f-9011-5d287e089891	\N	\N	Testing Maint Request	83a09fa5-058e-422d-9840-0dc47e380f92	90d8232e-ee6d-40ce-ac37-9fd3cbc86212	f
0d80a750-5dfe-440b-8cb8-811f3b2f256f	66	2021-07-12 15:50:14.609585+00	2021-07-12 15:54:03.510873+00	41a6c2df-9227-4884-8128-dab9e38f04df	\N	\N	note for customer	5a124cd2-42d3-4dc4-b15e-ee5a179259c9	3e564c80-a6e1-494a-93aa-458362580482	f
0e9398f1-576b-4ba6-a7c3-85e09b80c440	1	2021-07-06 15:28:22.107747+00	2021-07-12 10:40:37.64849+00	1a4d9635-f168-4e24-b1ee-3dfde0e9f360	\N	\N	My first servic	aca85a95-125a-4907-b63c-6580d3723900	90d8232e-ee6d-40ce-ac37-9fd3cbc86212	f
87b10057-e8bf-42a2-a7bc-0f25311c8505	41	2021-07-10 15:15:29.741938+00	2021-07-13 15:17:24.327491+00	1a4d9635-f168-4e24-b1ee-3dfde0e9f360	{"customer_rate": 4, "customer_rate_notes": "good service, but he seemed a bit in experinced and took longer time "}	\N	additional notes	aca85a95-125a-4907-b63c-6580d3723900	3e564c80-a6e1-494a-93aa-458362580482	f
f547999d-ee3b-4523-91b1-499515f928dd	73	2021-07-27 08:39:58.666856+00	2021-07-27 08:39:58.666856+00	1a4d9635-f168-4e24-b1ee-3dfde0e9f360	\N	\N	request not urgent 	aca85a95-125a-4907-b63c-6580d3723900	9369c555-f873-4447-b016-c28dc2d4e1b6	f
69225e43-9073-4757-834f-b04bff647350	69	2021-07-14 13:54:22.433354+00	2021-07-27 08:41:21.259336+00	1a4d9635-f168-4e24-b1ee-3dfde0e9f360	{"reRequested": true}	\N	one more time 	aca85a95-125a-4907-b63c-6580d3723900	3e564c80-a6e1-494a-93aa-458362580482	f
2ba6181d-74b9-4a25-bb78-8dc309f02c63	75	2021-07-27 08:43:47.664294+00	2021-07-27 08:43:47.664294+00	1a4d9635-f168-4e24-b1ee-3dfde0e9f360	\N	\N	request is urgent	83a09fa5-058e-422d-9840-0dc47e380f92	9369c555-f873-4447-b016-c28dc2d4e1b6	t
5fd50079-c821-457b-9a92-968433b8359b	72	2021-07-27 08:35:37.20076+00	2021-07-27 09:37:47.181898+00	a611493f-3782-4b32-9d89-8b4bf92f0526	\N	\N	tested	c250e883-dc99-49ab-acae-6fc92d3ddd0f	3e564c80-a6e1-494a-93aa-458362580482	f
264563e6-bfc8-46d7-8fb2-8c146e0ebc84	9	2021-07-08 10:57:43.510834+00	2021-07-27 09:38:03.673017+00	04c2a85e-6e8c-4abb-8154-c640bb96c067	\N	\N	9999	aca85a95-125a-4907-b63c-6580d3723900	3e564c80-a6e1-494a-93aa-458362580482	f
95e5f592-7f68-4669-bdda-46d46ba432bd	70	2021-07-14 14:00:24.916303+00	2021-07-27 09:39:30.397306+00	1a4d9635-f168-4e24-b1ee-3dfde0e9f360	\N	\N	testing it	bdaa00fe-f3a0-4203-aa28-2b34fc7b7136	3e564c80-a6e1-494a-93aa-458362580482	f
0c52ac85-955a-4b4b-bb3a-d27e77ffbb5d	67	2021-07-13 13:10:15.068018+00	2021-07-27 09:46:24.834405+00	1a4d9635-f168-4e24-b1ee-3dfde0e9f360	\N	\N	Testing filters for unit number	bdaa00fe-f3a0-4203-aa28-2b34fc7b7136	49cc98cd-e76b-4518-9bc4-e72cda6b89ed	f
9e963e22-6b91-4f5b-8b4d-8b634fe21d6a	8	2021-07-08 10:53:49.850837+00	2021-07-27 09:46:46.274849+00	1a4d9635-f168-4e24-b1ee-3dfde0e9f360	\N	\N	ملحوظة علي الاصلاح	aca85a95-125a-4907-b63c-6580d3723900	49cc98cd-e76b-4518-9bc4-e72cda6b89ed	f
\.
COPY public.mnt_request_assign (id, code, request_id, technician_id, ext_data, media, created_at, updated_at, assign_date) FROM stdin;
ec3a6e5a-9318-423a-b72e-63444b42e58d	127	296c7377-c802-46f0-8dce-0f90431c43ea	b0b4f83d-b5a9-461c-8fcc-9db8ee59a95a	{"completed": true, "start_time": "2021-07-26T13:16:31.014Z", "finish_time": "2021-07-27T09:45:33.141Z"}	\N	2021-07-26 10:46:03.727894+00	2021-07-27 09:45:33.286186+00	2021-07-26 00:00:00+00
4a85334a-5607-4ff6-8db3-25e77c12f2b1	125	0c52ac85-955a-4b4b-bb3a-d27e77ffbb5d	b0b4f83d-b5a9-461c-8fcc-9db8ee59a95a	{"completed": true, "start_time": "2021-07-27T09:43:03.507Z", "finish_time": "2021-07-27T09:46:25.940Z"}	\N	2021-07-26 10:35:59.474141+00	2021-07-27 09:46:24.834405+00	2021-08-05 00:00:00+00
37083f7c-7057-4fe4-8f21-b90a6bfb5548	131	9e963e22-6b91-4f5b-8b4d-8b634fe21d6a	b0b4f83d-b5a9-461c-8fcc-9db8ee59a95a	{"completed": true, "start_time": "2021-07-27T09:45:05.621Z", "finish_time": "2021-07-27T09:46:48.218Z"}	\N	2021-07-26 10:51:46.564915+00	2021-07-27 09:46:46.274849+00	2021-07-27 00:00:00+00
9002ae79-f118-4d43-854e-d5c328ab73e5	133	e62d6837-034d-4288-ab6b-db5163394170	b0b4f83d-b5a9-461c-8fcc-9db8ee59a95a	{"cost": "0", "completed": true, "start_time": "2021-08-15T19:03:29.168Z", "finish_time": "2021-08-15T19:04:06.269Z"}	\N	2021-08-15 18:45:35.117487+00	2021-08-15 19:04:07.564298+00	2021-08-15 00:00:00+00
76142bc2-8950-4800-a3e1-5c1f9af52903	135	86c2efbb-4cab-4377-abeb-e0bb73c47b03	07397586-1c73-4c46-a465-e656932cde10	{"cost": "150", "completed": true, "start_time": "2021-08-16T10:14:49.598Z", "finish_time": "2021-08-16T10:15:20.164Z", "Technician_notes": "تم شحن الفريون بتكلفة 150 ريال"}	\N	2021-08-16 10:13:07.422652+00	2021-08-16 10:15:22.815315+00	2021-08-16 00:00:00+00
271e3f6f-06a3-4b72-8cf2-615083259e94	119	87b10057-e8bf-42a2-a7bc-0f25311c8505	b0b4f83d-b5a9-461c-8fcc-9db8ee59a95a	{"cost": "250", "completed": true, "start_time": "2021-07-13T14:23:31.382Z", "finish_time": "2021-07-13T14:23:47.698Z", "Technician_notes": "notes here "}	\N	2021-07-12 11:16:48.159651+00	2021-07-13 14:23:48.230271+00	2021-07-14 00:00:00+00
87047b1e-4ae5-43d1-935a-b0d80a85ccc4	129	69225e43-9073-4757-834f-b04bff647350	b0b4f83d-b5a9-461c-8fcc-9db8ee59a95a	{"cost": "0", "completed": true, "start_time": "2021-07-27T08:40:57.670Z", "finish_time": "2021-07-27T08:41:20.109Z"}	\N	2021-07-26 10:49:12.5304+00	2021-07-27 08:41:21.259336+00	2021-07-28 00:00:00+00
5ed92da0-0334-472f-989f-d6ece0fae9f3	132	5fd50079-c821-457b-9a92-968433b8359b	b0b4f83d-b5a9-461c-8fcc-9db8ee59a95a	{"start_time": "2021-07-27T09:37:48.263Z"}	\N	2021-07-27 08:37:17.648136+00	2021-07-27 09:37:47.181898+00	2021-07-28 00:00:00+00
45601f0a-32c1-4a5e-b993-03445a443345	126	264563e6-bfc8-46d7-8fb2-8c146e0ebc84	b0b4f83d-b5a9-461c-8fcc-9db8ee59a95a	{"start_time": "2021-07-27T09:38:01.710Z"}	\N	2021-07-26 10:45:50.655775+00	2021-07-27 09:38:03.673017+00	2021-07-26 00:00:00+00
50022751-6672-4ee6-bcc6-7ad27e017726	130	95e5f592-7f68-4669-bdda-46d46ba432bd	b0b4f83d-b5a9-461c-8fcc-9db8ee59a95a	{"start_time": "2021-07-27T09:39:30.940Z"}	\N	2021-07-26 10:49:41.024637+00	2021-07-27 09:39:30.397306+00	2021-07-29 00:00:00+00
52ad8891-95b3-444a-9add-a2c2d160d566	134	651cdaa1-280c-4823-bf1d-1250b8df41dd	857ff610-26be-473a-878b-cec628262b72	{"cost": "150", "completed": true, "start_time": "2021-08-15T19:10:41.456Z", "finish_time": "2021-08-15T19:12:27.393Z", "Technician_notes": "تم الإصلاح"}	\N	2021-08-15 19:09:42.365862+00	2021-08-15 19:12:28.607329+00	2021-08-15 00:00:00+00
96ed0c7a-23a8-436c-be3a-0abc9b05f0af	116	0e9398f1-576b-4ba6-a7c3-85e09b80c440	dbfc59ec-ccb2-40fd-b53c-22860b9c442f	\N	\N	2021-07-12 10:40:40.25217+00	2021-07-12 10:40:40.25217+00	2021-07-14 00:00:00+00
ba1a4a5f-27aa-486b-8fe2-446ccd8a8c20	124	b6522e33-14de-4066-80a6-c30d195f076d	b0b4f83d-b5a9-461c-8fcc-9db8ee59a95a	\N	\N	2021-07-26 09:35:21.051623+00	2021-07-26 09:35:21.051623+00	2021-07-28 00:00:00+00
51fdb090-c1f5-44ed-9a14-70aefac7cc32	128	4a554f5c-dada-47ae-8a2f-f74522f4f699	b0b4f83d-b5a9-461c-8fcc-9db8ee59a95a	\N	\N	2021-07-26 10:46:15.870693+00	2021-07-26 10:46:15.870693+00	2021-07-27 00:00:00+00
\.
COPY public.mnt_request_item (id, code, mnt_item_id, mnt_request_id, ext_data) FROM stdin;
\.
COPY public.mnt_request_status (id, code, request_id, req_status_type_id, ext_data, media, created_at, updated_at) FROM stdin;
5da3c7dd-621c-4537-91a3-15336cbd7d80	2	264563e6-bfc8-46d7-8fb2-8c146e0ebc84	9369c555-f873-4447-b016-c28dc2d4e1b6	\N	\N	2021-07-11 11:01:25.864563+00	2021-07-11 11:01:25.864563+00
\.
COPY public.mnt_request_status_type (id, code, label, created_at, updated_at) FROM stdin;
9369c555-f873-4447-b016-c28dc2d4e1b6	1	{"ar": "جديد", "en": "new"}	2021-07-11 10:35:48.163407+00	2021-07-11 10:35:48.163407+00
90d8232e-ee6d-40ce-ac37-9fd3cbc86212	2	{"ar": "معاينة", "en": "preview"}	2021-07-11 10:36:03.052745+00	2021-07-26 09:36:15.947871+00
3e564c80-a6e1-494a-93aa-458362580482	3	{"ar": "تنفيذ", "en": "execute"}	2021-07-11 10:36:30.753672+00	2021-07-26 09:36:47.859303+00
49cc98cd-e76b-4518-9bc4-e72cda6b89ed	4	{"ar": "تم الاصلاح", "en": "done"}	2021-07-26 09:37:11.341425+00	2021-07-26 09:37:11.341425+00
\.
COPY public.mnt_site (id, code, label, location, ext_data, media, created_at, deleted_at) FROM stdin;
3c463de5-c420-4ff8-be3f-9a28e7e7c757	1	{"ar": "مدينة البستان", "en": "Bostan City"}	\N	\N	\N	2021-06-21 21:26:08.334008+00	\N
\.
COPY public.mnt_unit (id, created_at, updated_at, project_id, unit_number, code, ext_data, address_id, is_contract_agree) FROM stdin;
eefaac3c-0edf-4440-a705-98d565aa5c6c	2021-07-11 15:08:19.923153+00	2021-07-11 15:08:19.923153+00	82fd80a4-c1e3-4973-bb49-3e608028264c	15	13	\N	\N	f
83a09fa5-058e-422d-9840-0dc47e380f92	2021-07-12 05:51:13.741561+00	2021-07-12 05:51:13.741561+00	82fd80a4-c1e3-4973-bb49-3e608028264c	17	2	\N	\N	f
5a124cd2-42d3-4dc4-b15e-ee5a179259c9	2021-07-12 15:46:51.140205+00	2021-07-12 15:46:51.140205+00	82fd80a4-c1e3-4973-bb49-3e608028264c	88	6	\N	\N	f
2147b360-b72b-4109-80f4-f9cda2353df6	2021-07-24 23:16:05.447552+00	2021-07-24 23:16:05.447552+00	82fd80a4-c1e3-4973-bb49-3e608028264c	89	8	\N	\N	f
bdaa00fe-f3a0-4203-aa28-2b34fc7b7136	2021-07-13 13:08:36.574036+00	2021-07-27 11:55:16.916861+00	82fd80a4-c1e3-4973-bb49-3e608028264c	95	7	\N	\N	t
c250e883-dc99-49ab-acae-6fc92d3ddd0f	2021-07-27 08:33:05.127995+00	2021-08-05 12:44:45.32341+00	2a1543b7-14db-49a7-877b-34286ed46903	63	9	\N	\N	t
aca85a95-125a-4907-b63c-6580d3723900	2021-07-06 14:37:26.984447+00	2021-08-11 16:53:21.619143+00	82fd80a4-c1e3-4973-bb49-3e608028264c	12	1	\N	212c290b-6e03-4b5b-9e63-f3eae2fc91ac	t
f8cd3e89-906e-44bd-8bda-91657d930456	2021-07-12 11:18:43.189996+00	2021-08-15 13:58:24.555888+00	82fd80a4-c1e3-4973-bb49-3e608028264c	33	3	\N	\N	t
f68de2b7-06ae-4564-bae1-baf38fbfe22e	2021-08-15 18:07:23.344805+00	2021-08-15 18:40:34.279899+00	2a1543b7-14db-49a7-877b-34286ed46903	64	10	\N	\N	t
0a1e6202-6e8c-4951-9597-18374688abc3	2021-08-15 22:03:19.677769+00	2021-08-15 22:03:19.677769+00	2a1543b7-14db-49a7-877b-34286ed46903	65	11	\N	\N	f
0707da2c-7cdc-4cbe-9fe1-d33018a5f0c6	2021-08-15 22:10:04.124678+00	2021-08-15 22:43:23.078013+00	0fe11c28-5035-4fd4-a1eb-d32b3844a0d1	101	12	\N	\N	t
4b57c954-7aac-4e1c-bef8-235b0709be94	2021-08-15 22:42:39.490551+00	2021-08-15 22:43:45.356789+00	0fe11c28-5035-4fd4-a1eb-d32b3844a0d1	102	13	\N	\N	t
231d3e6a-1cf5-437e-9828-99a757117e03	2021-08-16 08:39:06.166065+00	2021-08-16 08:39:06.166065+00	2a1543b7-14db-49a7-877b-34286ed46903	71	14	\N	\N	f
c09992ee-1672-41df-8a93-a6a86031cb88	2021-08-16 09:07:51.923793+00	2021-08-16 10:02:16.753225+00	2a1543b7-14db-49a7-877b-34286ed46903	73	15	\N	\N	t
\.
SELECT pg_catalog.setval('public.bsc_customer_code_seq', 18, true);
SELECT pg_catalog.setval('public.bsc_customer_type_code_seq', 3, true);
SELECT pg_catalog.setval('public.core_usertype_code_seq', 3, true);
SELECT pg_catalog.setval('public.loyal_cusomer_grade_code_seq', 4, true);
SELECT pg_catalog.setval('public.loyal_customer_grade_type_code_seq', 5, true);
SELECT pg_catalog.setval('public.loyal_point_history_code_seq', 3, true);
SELECT pg_catalog.setval('public.loyal_redeem_option_code_seq', 1, true);
SELECT pg_catalog.setval('public.loyal_redeem_option_type_code_seq', 3, true);
SELECT pg_catalog.setval('public.mnt_address_code_seq', 5, true);
SELECT pg_catalog.setval('public.mnt_city_code_seq', 1, false);
SELECT pg_catalog.setval('public.mnt_contract_code_seq', 10, true);
SELECT pg_catalog.setval('public.mnt_contract_item_code_seq', 14, true);
SELECT pg_catalog.setval('public.mnt_customer_unit_code_seq', 35, true);
SELECT pg_catalog.setval('public.mnt_items_code_seq', 6, true);
SELECT pg_catalog.setval('public.mnt_projects_code_seq', 4, true);
SELECT pg_catalog.setval('public.mnt_request_assign_code_seq', 135, true);
SELECT pg_catalog.setval('public.mnt_request_code_seq', 81, true);
SELECT pg_catalog.setval('public.mnt_request_item_code_seq', 1, false);
SELECT pg_catalog.setval('public.mnt_request_status_code_seq', 4, true);
SELECT pg_catalog.setval('public.mnt_request_status_code_seq1', 2, true);
SELECT pg_catalog.setval('public.mnt_site_code_seq', 1, true);
SELECT pg_catalog.setval('public.mnt_unit_code_seq', 15, true);
SELECT pg_catalog.setval('public.users_code_seq', 26, true);
ALTER TABLE ONLY public.bsc_customer
    ADD CONSTRAINT bsc_customer_id_code_key UNIQUE (id, code);
ALTER TABLE ONLY public.bsc_customer
    ADD CONSTRAINT bsc_customer_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.bsc_customer_type
    ADD CONSTRAINT bsc_customer_type_code_key UNIQUE (code);
ALTER TABLE ONLY public.bsc_customer_type
    ADD CONSTRAINT bsc_customer_type_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.core_user
    ADD CONSTRAINT core_user_id_code_key UNIQUE (id, code);
ALTER TABLE ONLY public.core_usertype
    ADD CONSTRAINT core_usertype_id_code_key UNIQUE (id, code);
ALTER TABLE ONLY public.core_usertype
    ADD CONSTRAINT core_usertype_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.loyal_customer_grade
    ADD CONSTRAINT loyal_cusomer_grade_code_key UNIQUE (code);
ALTER TABLE ONLY public.loyal_customer_grade
    ADD CONSTRAINT loyal_cusomer_grade_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.loyal_customer_grade_type
    ADD CONSTRAINT loyal_customer_grade_type_code_key UNIQUE (code);
ALTER TABLE ONLY public.loyal_customer_grade_type
    ADD CONSTRAINT loyal_customer_grade_type_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.loyal_point_history
    ADD CONSTRAINT loyal_point_history_code_key UNIQUE (code);
ALTER TABLE ONLY public.loyal_point_history
    ADD CONSTRAINT loyal_point_history_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.loyal_redeem_option
    ADD CONSTRAINT loyal_redeem_option_code_key UNIQUE (code);
ALTER TABLE ONLY public.loyal_redeem_option
    ADD CONSTRAINT loyal_redeem_option_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.loyal_redeem_option_type
    ADD CONSTRAINT loyal_redeem_option_type_code_key UNIQUE (code);
ALTER TABLE ONLY public.loyal_redeem_option_type
    ADD CONSTRAINT loyal_redeem_option_type_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.mnt_address
    ADD CONSTRAINT mnt_address_code_key UNIQUE (code);
ALTER TABLE ONLY public.mnt_address
    ADD CONSTRAINT mnt_address_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.mnt_city
    ADD CONSTRAINT mnt_city_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.mnt_contract
    ADD CONSTRAINT mnt_contract_code_key UNIQUE (code);
ALTER TABLE ONLY public.mnt_contract_item
    ADD CONSTRAINT mnt_contract_item_code_key UNIQUE (code);
ALTER TABLE ONLY public.mnt_contract_item
    ADD CONSTRAINT mnt_contract_item_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.mnt_contract
    ADD CONSTRAINT mnt_contract_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.mnt_customer_unit
    ADD CONSTRAINT mnt_customer_unit_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.mnt_item
    ADD CONSTRAINT mnt_item_id_code_key UNIQUE (id, code);
ALTER TABLE ONLY public.mnt_item
    ADD CONSTRAINT mnt_items_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.mnt_project
    ADD CONSTRAINT mnt_project_id_code_key UNIQUE (id, code);
ALTER TABLE ONLY public.mnt_project
    ADD CONSTRAINT mnt_projects_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.mnt_request_assign
    ADD CONSTRAINT mnt_request_assign_code_key UNIQUE (code);
ALTER TABLE ONLY public.mnt_request_assign
    ADD CONSTRAINT mnt_request_assign_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.mnt_request
    ADD CONSTRAINT mnt_request_id_code_key UNIQUE (id, code);
ALTER TABLE ONLY public.mnt_request_item
    ADD CONSTRAINT mnt_request_item_code_key UNIQUE (code);
ALTER TABLE ONLY public.mnt_request_item
    ADD CONSTRAINT mnt_request_item_id_key UNIQUE (id);
ALTER TABLE ONLY public.mnt_request_item
    ADD CONSTRAINT mnt_request_item_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.mnt_request
    ADD CONSTRAINT mnt_request_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.mnt_request_status_type
    ADD CONSTRAINT mnt_request_status_code_key UNIQUE (code);
ALTER TABLE ONLY public.mnt_request_status_type
    ADD CONSTRAINT mnt_request_status_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.mnt_request_status
    ADD CONSTRAINT mnt_request_status_pkey1 PRIMARY KEY (id);
ALTER TABLE ONLY public.mnt_site
    ADD CONSTRAINT mnt_site_id_code_key UNIQUE (id, code);
ALTER TABLE ONLY public.mnt_site
    ADD CONSTRAINT mnt_site_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.mnt_unit
    ADD CONSTRAINT mnt_unit_id_code_key UNIQUE (id, code);
ALTER TABLE ONLY public.mnt_unit
    ADD CONSTRAINT mnt_unit_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.core_user
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
CREATE TRIGGER set_public_bsc_customer_updated_at BEFORE UPDATE ON public.bsc_customer FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_bsc_customer_updated_at ON public.bsc_customer IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_core_usertype_updated_at BEFORE UPDATE ON public.core_usertype FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_core_usertype_updated_at ON public.core_usertype IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_loyal_cusomer_grade_updated_at BEFORE UPDATE ON public.loyal_customer_grade FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_loyal_cusomer_grade_updated_at ON public.loyal_customer_grade IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_loyal_customer_grade_type_updated_at BEFORE UPDATE ON public.loyal_customer_grade_type FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_loyal_customer_grade_type_updated_at ON public.loyal_customer_grade_type IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_loyal_point_history_updated_at BEFORE UPDATE ON public.loyal_point_history FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_loyal_point_history_updated_at ON public.loyal_point_history IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_loyal_redeem_option_updated_at BEFORE UPDATE ON public.loyal_redeem_option FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_loyal_redeem_option_updated_at ON public.loyal_redeem_option IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_mnt_address_updated_at BEFORE UPDATE ON public.mnt_address FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_mnt_address_updated_at ON public.mnt_address IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_mnt_city_updated_at BEFORE UPDATE ON public.mnt_city FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_mnt_city_updated_at ON public.mnt_city IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_mnt_contract_item_updated_at BEFORE UPDATE ON public.mnt_contract_item FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_mnt_contract_item_updated_at ON public.mnt_contract_item IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_mnt_contract_updated_at BEFORE UPDATE ON public.mnt_contract FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_mnt_contract_updated_at ON public.mnt_contract IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_mnt_customer_unit_updated_at BEFORE UPDATE ON public.mnt_customer_unit FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_mnt_customer_unit_updated_at ON public.mnt_customer_unit IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_mnt_items_updated_at BEFORE UPDATE ON public.mnt_item FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_mnt_items_updated_at ON public.mnt_item IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_mnt_projects_updated_at BEFORE UPDATE ON public.mnt_project FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_mnt_projects_updated_at ON public.mnt_project IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_mnt_request_assign_updated_at BEFORE UPDATE ON public.mnt_request_assign FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_mnt_request_assign_updated_at ON public.mnt_request_assign IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_mnt_request_status_updated_at BEFORE UPDATE ON public.mnt_request_status FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_mnt_request_status_updated_at ON public.mnt_request_status IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_mnt_request_status_updated_at BEFORE UPDATE ON public.mnt_request_status_type FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_mnt_request_status_updated_at ON public.mnt_request_status_type IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_mnt_request_updated_at BEFORE UPDATE ON public.mnt_request FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_mnt_request_updated_at ON public.mnt_request IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_mnt_unit_updated_at BEFORE UPDATE ON public.mnt_unit FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_mnt_unit_updated_at ON public.mnt_unit IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_users_updated_at BEFORE UPDATE ON public.core_user FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_users_updated_at ON public.core_user IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.bsc_customer
    ADD CONSTRAINT bsc_customer_customer_type_id_fkey FOREIGN KEY (customer_type_id) REFERENCES public.bsc_customer_type(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.core_user
    ADD CONSTRAINT core_user_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.bsc_customer(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.core_user
    ADD CONSTRAINT core_user_user_type_fkey FOREIGN KEY (user_type_id) REFERENCES public.core_usertype(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.loyal_customer_grade
    ADD CONSTRAINT loyal_cusomer_grade_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.bsc_customer(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.loyal_customer_grade
    ADD CONSTRAINT loyal_cusomer_grade_cutomer_grade_type_id_fkey FOREIGN KEY (cutomer_grade_type_id) REFERENCES public.loyal_customer_grade_type(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.loyal_point_history
    ADD CONSTRAINT loyal_point_history_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.bsc_customer(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.loyal_redeem_option
    ADD CONSTRAINT loyal_redeem_option_option_type_id_fkey FOREIGN KEY (option_type_id) REFERENCES public.loyal_redeem_option_type(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.mnt_address
    ADD CONSTRAINT mnt_address_unit_id_fkey FOREIGN KEY (unit_id) REFERENCES public.mnt_unit(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.mnt_contract_item
    ADD CONSTRAINT mnt_contract_item_contract_id_fkey FOREIGN KEY (contract_id) REFERENCES public.mnt_contract(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.mnt_contract_item
    ADD CONSTRAINT mnt_contract_item_mnt_item_id_fkey FOREIGN KEY (mnt_item_id) REFERENCES public.mnt_item(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.mnt_contract
    ADD CONSTRAINT mnt_contract_unit_id_fkey FOREIGN KEY (unit_id) REFERENCES public.mnt_unit(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.mnt_customer_unit
    ADD CONSTRAINT mnt_customer_unit_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.bsc_customer(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.mnt_customer_unit
    ADD CONSTRAINT mnt_customer_unit_unit_id_fkey FOREIGN KEY (unit_id) REFERENCES public.mnt_unit(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.mnt_project
    ADD CONSTRAINT mnt_project_city_id_fkey FOREIGN KEY (city_id) REFERENCES public.mnt_city(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.mnt_project
    ADD CONSTRAINT mnt_projects_site_id_fkey FOREIGN KEY (site_id) REFERENCES public.mnt_site(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.mnt_request_assign
    ADD CONSTRAINT mnt_request_assign_request_id_fkey FOREIGN KEY (request_id) REFERENCES public.mnt_request(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.mnt_request_assign
    ADD CONSTRAINT mnt_request_assign_technician_id_fkey FOREIGN KEY (technician_id) REFERENCES public.core_user(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.mnt_request
    ADD CONSTRAINT mnt_request_bsc_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.bsc_customer(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.mnt_request_item
    ADD CONSTRAINT mnt_request_item_mnt_item_id_fkey FOREIGN KEY (mnt_item_id) REFERENCES public.mnt_item(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.mnt_request_item
    ADD CONSTRAINT mnt_request_item_mnt_request_id_fkey FOREIGN KEY (mnt_request_id) REFERENCES public.mnt_request(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.mnt_request
    ADD CONSTRAINT mnt_request_request_status_id_fkey FOREIGN KEY (request_status_id) REFERENCES public.mnt_request_status_type(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.mnt_request_status
    ADD CONSTRAINT mnt_request_status_req_status_type_id_fkey FOREIGN KEY (req_status_type_id) REFERENCES public.mnt_request_status_type(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.mnt_request_status
    ADD CONSTRAINT mnt_request_status_request_id_fkey FOREIGN KEY (request_id) REFERENCES public.mnt_request(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.mnt_request
    ADD CONSTRAINT mnt_request_unit_id_fkey FOREIGN KEY (unit_id) REFERENCES public.mnt_unit(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.mnt_unit
    ADD CONSTRAINT mnt_unit_address_id_fkey FOREIGN KEY (address_id) REFERENCES public.mnt_address(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.mnt_unit
    ADD CONSTRAINT mnt_unit_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.mnt_project(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
REVOKE ALL ON SCHEMA public FROM postgres;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO ajnmekyuoiattn;
GRANT ALL ON SCHEMA public TO PUBLIC;
GRANT ALL ON LANGUAGE plpgsql TO ajnmekyuoiattn;
