import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`ALTER TABLE \`settings\` RENAME TO \`web_settings\`;`)
  await db.run(sql`ALTER TABLE \`settings_locales\` RENAME TO \`web_settings_locales\`;`)
  await db.run(sql`ALTER TABLE \`web_settings\` RENAME COLUMN "site_name" TO "general_name";`)
  await db.run(sql`ALTER TABLE \`web_settings\` RENAME COLUMN "icon_id" TO "general_icon_id";`)
  await db.run(sql`ALTER TABLE \`web_settings\` RENAME COLUMN "logo_id" TO "general_logo_id";`)
  await db.run(sql`ALTER TABLE \`web_settings_locales\` RENAME COLUMN "site_description" TO "general_description";`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_about_03_achievements_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages_blocks_block_about_03\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_about_03_achievements_items_order_idx\` ON \`web_pages_blocks_block_about_03_achievements_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_about_03_achievements_items_parent_id_idx\` ON \`web_pages_blocks_block_about_03_achievements_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_about_03_achievements_items_locales\` (
  	\`label\` text,
  	\`value\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages_blocks_block_about_03_achievements_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_pages_blocks_block_about_03_achievements_items_locales_l\` ON \`web_pages_blocks_block_about_03_achievements_items_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_about_03\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`images_main_id\` integer,
  	\`images_secondary_id\` integer,
  	\`breakout_image_id\` integer,
  	\`breakout_button_is_external\` integer DEFAULT false,
  	\`breakout_button_link_label\` text,
  	\`breakout_button_link_url\` text,
  	\`breakout_button_page_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`images_main_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`images_secondary_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`breakout_image_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`breakout_button_page_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_about_03_order_idx\` ON \`web_pages_blocks_block_about_03\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_about_03_parent_id_idx\` ON \`web_pages_blocks_block_about_03\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_about_03_path_idx\` ON \`web_pages_blocks_block_about_03\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_about_03_images_images_main_idx\` ON \`web_pages_blocks_block_about_03\` (\`images_main_id\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_about_03_images_images_secondary_idx\` ON \`web_pages_blocks_block_about_03\` (\`images_secondary_id\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_about_03_breakout_breakout_image_idx\` ON \`web_pages_blocks_block_about_03\` (\`breakout_image_id\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_about_03_breakout_button_breakout_idx\` ON \`web_pages_blocks_block_about_03\` (\`breakout_button_page_id\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_about_03_locales\` (
  	\`title\` text,
  	\`description\` text,
  	\`breakout_title\` text,
  	\`breakout_description\` text,
  	\`companies_title\` text,
  	\`achievements_title\` text,
  	\`achievements_description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages_blocks_block_about_03\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_pages_blocks_block_about_03_locales_locale_parent_id_uni\` ON \`web_pages_blocks_block_about_03_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_award_01_awards\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`year\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages_blocks_block_award_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_award_01_awards_order_idx\` ON \`web_pages_blocks_block_award_01_awards\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_award_01_awards_parent_id_idx\` ON \`web_pages_blocks_block_award_01_awards\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_award_01_awards_locales\` (
  	\`name\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages_blocks_block_award_01_awards\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_pages_blocks_block_award_01_awards_locales_locale_parent\` ON \`web_pages_blocks_block_award_01_awards_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_award_01\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_award_01_order_idx\` ON \`web_pages_blocks_block_award_01\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_award_01_parent_id_idx\` ON \`web_pages_blocks_block_award_01\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_award_01_path_idx\` ON \`web_pages_blocks_block_award_01\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_banner_01\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`default_visible\` integer DEFAULT true,
  	\`link_is_external\` integer DEFAULT false,
  	\`link_link_label\` text,
  	\`link_link_url\` text,
  	\`link_page_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`link_page_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_banner_01_order_idx\` ON \`web_pages_blocks_block_banner_01\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_banner_01_parent_id_idx\` ON \`web_pages_blocks_block_banner_01\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_banner_01_path_idx\` ON \`web_pages_blocks_block_banner_01\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_banner_01_link_link_page_idx\` ON \`web_pages_blocks_block_banner_01\` (\`link_page_id\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_banner_01_locales\` (
  	\`title\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages_blocks_block_banner_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_pages_blocks_block_banner_01_locales_locale_parent_id_un\` ON \`web_pages_blocks_block_banner_01_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_case_studies_02_items_stats_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages_blocks_block_case_studies_02_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_case_studies_02_items_stats_items_order_idx\` ON \`web_pages_blocks_block_case_studies_02_items_stats_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_case_studies_02_items_stats_items_parent_id_idx\` ON \`web_pages_blocks_block_case_studies_02_items_stats_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_case_studies_02_items_stats_items_locales\` (
  	\`title\` text,
  	\`subtitle\` text,
  	\`value\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages_blocks_block_case_studies_02_items_stats_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_pages_blocks_block_case_studies_02_items_stats_items_loc\` ON \`web_pages_blocks_block_case_studies_02_items_stats_items_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_case_studies_02_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`logo_id\` integer,
  	\`thumbnail_id\` integer,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`thumbnail_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages_blocks_block_case_studies_02\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_case_studies_02_items_order_idx\` ON \`web_pages_blocks_block_case_studies_02_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_case_studies_02_items_parent_id_idx\` ON \`web_pages_blocks_block_case_studies_02_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_case_studies_02_items_logo_idx\` ON \`web_pages_blocks_block_case_studies_02_items\` (\`logo_id\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_case_studies_02_items_thumbnail_idx\` ON \`web_pages_blocks_block_case_studies_02_items\` (\`thumbnail_id\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_case_studies_02_items_locales\` (
  	\`author\` text,
  	\`role\` text,
  	\`quote\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages_blocks_block_case_studies_02_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_pages_blocks_block_case_studies_02_items_locales_locale_\` ON \`web_pages_blocks_block_case_studies_02_items_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_case_studies_02\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_case_studies_02_order_idx\` ON \`web_pages_blocks_block_case_studies_02\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_case_studies_02_parent_id_idx\` ON \`web_pages_blocks_block_case_studies_02\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_case_studies_02_path_idx\` ON \`web_pages_blocks_block_case_studies_02\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_case_studies_02_locales\` (
  	\`title\` text,
  	\`subtitle\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages_blocks_block_case_studies_02\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_pages_blocks_block_case_studies_02_locales_locale_parent\` ON \`web_pages_blocks_block_case_studies_02_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_community_01_social\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`network\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages_blocks_block_community_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_community_01_social_order_idx\` ON \`web_pages_blocks_block_community_01_social\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_community_01_social_parent_id_idx\` ON \`web_pages_blocks_block_community_01_social\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_community_01\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_community_01_order_idx\` ON \`web_pages_blocks_block_community_01\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_community_01_parent_id_idx\` ON \`web_pages_blocks_block_community_01\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_community_01_path_idx\` ON \`web_pages_blocks_block_community_01\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_community_01_locales\` (
  	\`title\` text,
  	\`subtitle\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages_blocks_block_community_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_pages_blocks_block_community_01_locales_locale_parent_id\` ON \`web_pages_blocks_block_community_01_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_compliance_01_highlights\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`icon_id\` integer,
  	FOREIGN KEY (\`icon_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages_blocks_block_compliance_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_compliance_01_highlights_order_idx\` ON \`web_pages_blocks_block_compliance_01_highlights\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_compliance_01_highlights_parent_id_idx\` ON \`web_pages_blocks_block_compliance_01_highlights\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_compliance_01_highlights_icon_idx\` ON \`web_pages_blocks_block_compliance_01_highlights\` (\`icon_id\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_compliance_01_highlights_locales\` (
  	\`title\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages_blocks_block_compliance_01_highlights\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_pages_blocks_block_compliance_01_highlights_locales_loca\` ON \`web_pages_blocks_block_compliance_01_highlights_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_compliance_01\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_compliance_01_order_idx\` ON \`web_pages_blocks_block_compliance_01\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_compliance_01_parent_id_idx\` ON \`web_pages_blocks_block_compliance_01\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_compliance_01_path_idx\` ON \`web_pages_blocks_block_compliance_01\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_compliance_01_locales\` (
  	\`badge\` text,
  	\`title\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages_blocks_block_compliance_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_pages_blocks_block_compliance_01_locales_locale_parent_i\` ON \`web_pages_blocks_block_compliance_01_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_cta_10\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`buttons_primary_is_external\` integer DEFAULT false,
  	\`buttons_primary_link_label\` text,
  	\`buttons_primary_link_url\` text,
  	\`buttons_primary_page_id\` integer,
  	\`buttons_secondary_is_external\` integer DEFAULT false,
  	\`buttons_secondary_link_label\` text,
  	\`buttons_secondary_link_url\` text,
  	\`buttons_secondary_page_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`buttons_primary_page_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`buttons_secondary_page_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_cta_10_order_idx\` ON \`web_pages_blocks_block_cta_10\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_cta_10_parent_id_idx\` ON \`web_pages_blocks_block_cta_10\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_cta_10_path_idx\` ON \`web_pages_blocks_block_cta_10\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_cta_10_buttons_primary_buttons_pr_idx\` ON \`web_pages_blocks_block_cta_10\` (\`buttons_primary_page_id\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_cta_10_buttons_secondary_buttons__idx\` ON \`web_pages_blocks_block_cta_10\` (\`buttons_secondary_page_id\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_cta_10_locales\` (
  	\`heading\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages_blocks_block_cta_10\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_pages_blocks_block_cta_10_locales_locale_parent_id_uniqu\` ON \`web_pages_blocks_block_cta_10_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_cta_11\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_cta_11_order_idx\` ON \`web_pages_blocks_block_cta_11\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_cta_11_parent_id_idx\` ON \`web_pages_blocks_block_cta_11\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_cta_11_path_idx\` ON \`web_pages_blocks_block_cta_11\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_cta_11_image_idx\` ON \`web_pages_blocks_block_cta_11\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_cta_11_locales\` (
  	\`heading\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages_blocks_block_cta_11\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_pages_blocks_block_cta_11_locales_locale_parent_id_uniqu\` ON \`web_pages_blocks_block_cta_11_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_faq_01_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages_blocks_block_faq_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_faq_01_items_order_idx\` ON \`web_pages_blocks_block_faq_01_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_faq_01_items_parent_id_idx\` ON \`web_pages_blocks_block_faq_01_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_faq_01_items_locales\` (
  	\`question\` text,
  	\`answer\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages_blocks_block_faq_01_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_pages_blocks_block_faq_01_items_locales_locale_parent_id\` ON \`web_pages_blocks_block_faq_01_items_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_faq_01\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_faq_01_order_idx\` ON \`web_pages_blocks_block_faq_01\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_faq_01_parent_id_idx\` ON \`web_pages_blocks_block_faq_01\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_faq_01_path_idx\` ON \`web_pages_blocks_block_faq_01\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_faq_01_locales\` (
  	\`heading\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages_blocks_block_faq_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_pages_blocks_block_faq_01_locales_locale_parent_id_uniqu\` ON \`web_pages_blocks_block_faq_01_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_hero_01_buttons\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`is_external\` integer DEFAULT false,
  	\`link_label\` text,
  	\`link_url\` text,
  	\`page_id\` integer,
  	FOREIGN KEY (\`page_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages_blocks_block_hero_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_hero_01_buttons_order_idx\` ON \`web_pages_blocks_block_hero_01_buttons\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_hero_01_buttons_parent_id_idx\` ON \`web_pages_blocks_block_hero_01_buttons\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_hero_01_buttons_page_idx\` ON \`web_pages_blocks_block_hero_01_buttons\` (\`page_id\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_hero_01\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_hero_01_order_idx\` ON \`web_pages_blocks_block_hero_01\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_hero_01_parent_id_idx\` ON \`web_pages_blocks_block_hero_01\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_hero_01_path_idx\` ON \`web_pages_blocks_block_hero_01\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_blocks_block_hero_01_image_idx\` ON \`web_pages_blocks_block_hero_01\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_blocks_block_hero_01_locales\` (
  	\`badge\` text,
  	\`heading\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages_blocks_block_hero_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_pages_blocks_block_hero_01_locales_locale_parent_id_uniq\` ON \`web_pages_blocks_block_hero_01_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_pages\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`generate_slug\` integer DEFAULT true,
  	\`slug\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`deleted_at\` text,
  	\`_status\` text DEFAULT 'draft'
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_pages_slug_idx\` ON \`web_pages\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_updated_at_idx\` ON \`web_pages\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_created_at_idx\` ON \`web_pages\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_deleted_at_idx\` ON \`web_pages\` (\`deleted_at\`);`)
  await db.run(sql`CREATE INDEX \`web_pages__status_idx\` ON \`web_pages\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_locales\` (
  	\`title\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_pages_locales_locale_parent_id_unique\` ON \`web_pages_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_pages_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`cloud_photos_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`cloud_photos_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_pages_rels_order_idx\` ON \`web_pages_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_rels_parent_idx\` ON \`web_pages_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_rels_path_idx\` ON \`web_pages_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`web_pages_rels_cloud_photos_id_idx\` ON \`web_pages_rels\` (\`cloud_photos_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_about_03_achievements_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v_blocks_block_about_03\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_about_03_achievements_items_order_idx\` ON \`_web_pages_v_blocks_block_about_03_achievements_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_about_03_achievements_items_parent_id_idx\` ON \`_web_pages_v_blocks_block_about_03_achievements_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_about_03_achievements_items_locales\` (
  	\`label\` text,
  	\`value\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v_blocks_block_about_03_achievements_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_pages_v_blocks_block_about_03_achievements_items_locale\` ON \`_web_pages_v_blocks_block_about_03_achievements_items_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_about_03\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`images_main_id\` integer,
  	\`images_secondary_id\` integer,
  	\`breakout_image_id\` integer,
  	\`breakout_button_is_external\` integer DEFAULT false,
  	\`breakout_button_link_label\` text,
  	\`breakout_button_link_url\` text,
  	\`breakout_button_page_id\` integer,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`images_main_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`images_secondary_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`breakout_image_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`breakout_button_page_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_about_03_order_idx\` ON \`_web_pages_v_blocks_block_about_03\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_about_03_parent_id_idx\` ON \`_web_pages_v_blocks_block_about_03\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_about_03_path_idx\` ON \`_web_pages_v_blocks_block_about_03\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_about_03_images_images_main_idx\` ON \`_web_pages_v_blocks_block_about_03\` (\`images_main_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_about_03_images_images_seconda_idx\` ON \`_web_pages_v_blocks_block_about_03\` (\`images_secondary_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_about_03_breakout_breakout_ima_idx\` ON \`_web_pages_v_blocks_block_about_03\` (\`breakout_image_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_about_03_breakout_button_break_idx\` ON \`_web_pages_v_blocks_block_about_03\` (\`breakout_button_page_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_about_03_locales\` (
  	\`title\` text,
  	\`description\` text,
  	\`breakout_title\` text,
  	\`breakout_description\` text,
  	\`companies_title\` text,
  	\`achievements_title\` text,
  	\`achievements_description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v_blocks_block_about_03\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_pages_v_blocks_block_about_03_locales_locale_parent_id_\` ON \`_web_pages_v_blocks_block_about_03_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_award_01_awards\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`year\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v_blocks_block_award_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_award_01_awards_order_idx\` ON \`_web_pages_v_blocks_block_award_01_awards\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_award_01_awards_parent_id_idx\` ON \`_web_pages_v_blocks_block_award_01_awards\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_award_01_awards_locales\` (
  	\`name\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v_blocks_block_award_01_awards\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_pages_v_blocks_block_award_01_awards_locales_locale_par\` ON \`_web_pages_v_blocks_block_award_01_awards_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_award_01\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_award_01_order_idx\` ON \`_web_pages_v_blocks_block_award_01\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_award_01_parent_id_idx\` ON \`_web_pages_v_blocks_block_award_01\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_award_01_path_idx\` ON \`_web_pages_v_blocks_block_award_01\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_banner_01\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`default_visible\` integer DEFAULT true,
  	\`link_is_external\` integer DEFAULT false,
  	\`link_link_label\` text,
  	\`link_link_url\` text,
  	\`link_page_id\` integer,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`link_page_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_banner_01_order_idx\` ON \`_web_pages_v_blocks_block_banner_01\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_banner_01_parent_id_idx\` ON \`_web_pages_v_blocks_block_banner_01\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_banner_01_path_idx\` ON \`_web_pages_v_blocks_block_banner_01\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_banner_01_link_link_page_idx\` ON \`_web_pages_v_blocks_block_banner_01\` (\`link_page_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_banner_01_locales\` (
  	\`title\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v_blocks_block_banner_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_pages_v_blocks_block_banner_01_locales_locale_parent_id\` ON \`_web_pages_v_blocks_block_banner_01_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_case_studies_02_items_stats_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v_blocks_block_case_studies_02_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_case_studies_02_items_stats_items_order_idx\` ON \`_web_pages_v_blocks_block_case_studies_02_items_stats_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_case_studies_02_items_stats_items_parent_id_idx\` ON \`_web_pages_v_blocks_block_case_studies_02_items_stats_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_case_studies_02_items_stats_items_locales\` (
  	\`title\` text,
  	\`subtitle\` text,
  	\`value\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v_blocks_block_case_studies_02_items_stats_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_pages_v_blocks_block_case_studies_02_items_stats_items_\` ON \`_web_pages_v_blocks_block_case_studies_02_items_stats_items_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_case_studies_02_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`logo_id\` integer,
  	\`thumbnail_id\` integer,
  	\`_uuid\` text,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`thumbnail_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v_blocks_block_case_studies_02\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_case_studies_02_items_order_idx\` ON \`_web_pages_v_blocks_block_case_studies_02_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_case_studies_02_items_parent_id_idx\` ON \`_web_pages_v_blocks_block_case_studies_02_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_case_studies_02_items_logo_idx\` ON \`_web_pages_v_blocks_block_case_studies_02_items\` (\`logo_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_case_studies_02_items_thumbnai_idx\` ON \`_web_pages_v_blocks_block_case_studies_02_items\` (\`thumbnail_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_case_studies_02_items_locales\` (
  	\`author\` text,
  	\`role\` text,
  	\`quote\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v_blocks_block_case_studies_02_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_pages_v_blocks_block_case_studies_02_items_locales_loca\` ON \`_web_pages_v_blocks_block_case_studies_02_items_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_case_studies_02\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_case_studies_02_order_idx\` ON \`_web_pages_v_blocks_block_case_studies_02\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_case_studies_02_parent_id_idx\` ON \`_web_pages_v_blocks_block_case_studies_02\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_case_studies_02_path_idx\` ON \`_web_pages_v_blocks_block_case_studies_02\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_case_studies_02_locales\` (
  	\`title\` text,
  	\`subtitle\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v_blocks_block_case_studies_02\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_pages_v_blocks_block_case_studies_02_locales_locale_par\` ON \`_web_pages_v_blocks_block_case_studies_02_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_community_01_social\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`network\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v_blocks_block_community_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_community_01_social_order_idx\` ON \`_web_pages_v_blocks_block_community_01_social\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_community_01_social_parent_id_idx\` ON \`_web_pages_v_blocks_block_community_01_social\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_community_01\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_community_01_order_idx\` ON \`_web_pages_v_blocks_block_community_01\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_community_01_parent_id_idx\` ON \`_web_pages_v_blocks_block_community_01\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_community_01_path_idx\` ON \`_web_pages_v_blocks_block_community_01\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_community_01_locales\` (
  	\`title\` text,
  	\`subtitle\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v_blocks_block_community_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_pages_v_blocks_block_community_01_locales_locale_parent\` ON \`_web_pages_v_blocks_block_community_01_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_compliance_01_highlights\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`icon_id\` integer,
  	\`_uuid\` text,
  	FOREIGN KEY (\`icon_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v_blocks_block_compliance_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_compliance_01_highlights_order_idx\` ON \`_web_pages_v_blocks_block_compliance_01_highlights\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_compliance_01_highlights_parent_id_idx\` ON \`_web_pages_v_blocks_block_compliance_01_highlights\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_compliance_01_highlights_icon_idx\` ON \`_web_pages_v_blocks_block_compliance_01_highlights\` (\`icon_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_compliance_01_highlights_locales\` (
  	\`title\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v_blocks_block_compliance_01_highlights\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_pages_v_blocks_block_compliance_01_highlights_locales_l\` ON \`_web_pages_v_blocks_block_compliance_01_highlights_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_compliance_01\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_compliance_01_order_idx\` ON \`_web_pages_v_blocks_block_compliance_01\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_compliance_01_parent_id_idx\` ON \`_web_pages_v_blocks_block_compliance_01\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_compliance_01_path_idx\` ON \`_web_pages_v_blocks_block_compliance_01\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_compliance_01_locales\` (
  	\`badge\` text,
  	\`title\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v_blocks_block_compliance_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_pages_v_blocks_block_compliance_01_locales_locale_paren\` ON \`_web_pages_v_blocks_block_compliance_01_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_cta_10\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`buttons_primary_is_external\` integer DEFAULT false,
  	\`buttons_primary_link_label\` text,
  	\`buttons_primary_link_url\` text,
  	\`buttons_primary_page_id\` integer,
  	\`buttons_secondary_is_external\` integer DEFAULT false,
  	\`buttons_secondary_link_label\` text,
  	\`buttons_secondary_link_url\` text,
  	\`buttons_secondary_page_id\` integer,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`buttons_primary_page_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`buttons_secondary_page_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_cta_10_order_idx\` ON \`_web_pages_v_blocks_block_cta_10\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_cta_10_parent_id_idx\` ON \`_web_pages_v_blocks_block_cta_10\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_cta_10_path_idx\` ON \`_web_pages_v_blocks_block_cta_10\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_cta_10_buttons_primary_buttons_idx\` ON \`_web_pages_v_blocks_block_cta_10\` (\`buttons_primary_page_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_cta_10_buttons_secondary_butto_idx\` ON \`_web_pages_v_blocks_block_cta_10\` (\`buttons_secondary_page_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_cta_10_locales\` (
  	\`heading\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v_blocks_block_cta_10\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_pages_v_blocks_block_cta_10_locales_locale_parent_id_un\` ON \`_web_pages_v_blocks_block_cta_10_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_cta_11\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_cta_11_order_idx\` ON \`_web_pages_v_blocks_block_cta_11\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_cta_11_parent_id_idx\` ON \`_web_pages_v_blocks_block_cta_11\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_cta_11_path_idx\` ON \`_web_pages_v_blocks_block_cta_11\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_cta_11_image_idx\` ON \`_web_pages_v_blocks_block_cta_11\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_cta_11_locales\` (
  	\`heading\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v_blocks_block_cta_11\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_pages_v_blocks_block_cta_11_locales_locale_parent_id_un\` ON \`_web_pages_v_blocks_block_cta_11_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_faq_01_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v_blocks_block_faq_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_faq_01_items_order_idx\` ON \`_web_pages_v_blocks_block_faq_01_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_faq_01_items_parent_id_idx\` ON \`_web_pages_v_blocks_block_faq_01_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_faq_01_items_locales\` (
  	\`question\` text,
  	\`answer\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v_blocks_block_faq_01_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_pages_v_blocks_block_faq_01_items_locales_locale_parent\` ON \`_web_pages_v_blocks_block_faq_01_items_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_faq_01\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_faq_01_order_idx\` ON \`_web_pages_v_blocks_block_faq_01\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_faq_01_parent_id_idx\` ON \`_web_pages_v_blocks_block_faq_01\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_faq_01_path_idx\` ON \`_web_pages_v_blocks_block_faq_01\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_faq_01_locales\` (
  	\`heading\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v_blocks_block_faq_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_pages_v_blocks_block_faq_01_locales_locale_parent_id_un\` ON \`_web_pages_v_blocks_block_faq_01_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_hero_01_buttons\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`is_external\` integer DEFAULT false,
  	\`link_label\` text,
  	\`link_url\` text,
  	\`page_id\` integer,
  	\`_uuid\` text,
  	FOREIGN KEY (\`page_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v_blocks_block_hero_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_hero_01_buttons_order_idx\` ON \`_web_pages_v_blocks_block_hero_01_buttons\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_hero_01_buttons_parent_id_idx\` ON \`_web_pages_v_blocks_block_hero_01_buttons\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_hero_01_buttons_page_idx\` ON \`_web_pages_v_blocks_block_hero_01_buttons\` (\`page_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_hero_01\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_hero_01_order_idx\` ON \`_web_pages_v_blocks_block_hero_01\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_hero_01_parent_id_idx\` ON \`_web_pages_v_blocks_block_hero_01\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_hero_01_path_idx\` ON \`_web_pages_v_blocks_block_hero_01\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_blocks_block_hero_01_image_idx\` ON \`_web_pages_v_blocks_block_hero_01\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_blocks_block_hero_01_locales\` (
  	\`badge\` text,
  	\`heading\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v_blocks_block_hero_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_pages_v_blocks_block_hero_01_locales_locale_parent_id_u\` ON \`_web_pages_v_blocks_block_hero_01_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_generate_slug\` integer DEFAULT true,
  	\`version_slug\` text,
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`version_deleted_at\` text,
  	\`version__status\` text DEFAULT 'draft',
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`snapshot\` integer,
  	\`published_locale\` text,
  	\`latest\` integer,
  	\`autosave\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_pages_v_parent_idx\` ON \`_web_pages_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_version_version_slug_idx\` ON \`_web_pages_v\` (\`version_slug\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_version_version_updated_at_idx\` ON \`_web_pages_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_version_version_created_at_idx\` ON \`_web_pages_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_version_version_deleted_at_idx\` ON \`_web_pages_v\` (\`version_deleted_at\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_version_version__status_idx\` ON \`_web_pages_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_created_at_idx\` ON \`_web_pages_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_updated_at_idx\` ON \`_web_pages_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_snapshot_idx\` ON \`_web_pages_v\` (\`snapshot\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_published_locale_idx\` ON \`_web_pages_v\` (\`published_locale\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_latest_idx\` ON \`_web_pages_v\` (\`latest\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_autosave_idx\` ON \`_web_pages_v\` (\`autosave\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_locales\` (
  	\`version_title\` text,
  	\`version_description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_pages_v_locales_locale_parent_id_unique\` ON \`_web_pages_v_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_pages_v_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`cloud_photos_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`_web_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`cloud_photos_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_pages_v_rels_order_idx\` ON \`_web_pages_v_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_rels_parent_idx\` ON \`_web_pages_v_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_rels_path_idx\` ON \`_web_pages_v_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`_web_pages_v_rels_cloud_photos_id_idx\` ON \`_web_pages_v_rels\` (\`cloud_photos_id\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_about_03_achievements_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing_blocks_block_about_03\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_about_03_achievements_items_order_idx\` ON \`web_landing_blocks_block_about_03_achievements_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_about_03_achievements_items_parent_id_idx\` ON \`web_landing_blocks_block_about_03_achievements_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_about_03_achievements_items_locales\` (
  	\`label\` text,
  	\`value\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing_blocks_block_about_03_achievements_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_landing_blocks_block_about_03_achievements_items_local_1\` ON \`web_landing_blocks_block_about_03_achievements_items_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_about_03\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`images_main_id\` integer,
  	\`images_secondary_id\` integer,
  	\`breakout_image_id\` integer,
  	\`breakout_button_is_external\` integer DEFAULT false,
  	\`breakout_button_link_label\` text,
  	\`breakout_button_link_url\` text,
  	\`breakout_button_page_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`images_main_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`images_secondary_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`breakout_image_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`breakout_button_page_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_about_03_order_idx\` ON \`web_landing_blocks_block_about_03\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_about_03_parent_id_idx\` ON \`web_landing_blocks_block_about_03\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_about_03_path_idx\` ON \`web_landing_blocks_block_about_03\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_about_03_images_images_main_idx\` ON \`web_landing_blocks_block_about_03\` (\`images_main_id\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_about_03_images_images_secondar_idx\` ON \`web_landing_blocks_block_about_03\` (\`images_secondary_id\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_about_03_breakout_breakout_imag_idx\` ON \`web_landing_blocks_block_about_03\` (\`breakout_image_id\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_about_03_breakout_button_breako_idx\` ON \`web_landing_blocks_block_about_03\` (\`breakout_button_page_id\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_about_03_locales\` (
  	\`title\` text,
  	\`description\` text,
  	\`breakout_title\` text,
  	\`breakout_description\` text,
  	\`companies_title\` text,
  	\`achievements_title\` text,
  	\`achievements_description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing_blocks_block_about_03\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_landing_blocks_block_about_03_locales_locale_parent_id_u\` ON \`web_landing_blocks_block_about_03_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_award_01_awards\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`year\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing_blocks_block_award_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_award_01_awards_order_idx\` ON \`web_landing_blocks_block_award_01_awards\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_award_01_awards_parent_id_idx\` ON \`web_landing_blocks_block_award_01_awards\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_award_01_awards_locales\` (
  	\`name\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing_blocks_block_award_01_awards\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_landing_blocks_block_award_01_awards_locales_locale_pare\` ON \`web_landing_blocks_block_award_01_awards_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_award_01\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_award_01_order_idx\` ON \`web_landing_blocks_block_award_01\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_award_01_parent_id_idx\` ON \`web_landing_blocks_block_award_01\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_award_01_path_idx\` ON \`web_landing_blocks_block_award_01\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_banner_01\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`default_visible\` integer DEFAULT true,
  	\`link_is_external\` integer DEFAULT false,
  	\`link_link_label\` text,
  	\`link_link_url\` text,
  	\`link_page_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`link_page_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_banner_01_order_idx\` ON \`web_landing_blocks_block_banner_01\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_banner_01_parent_id_idx\` ON \`web_landing_blocks_block_banner_01\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_banner_01_path_idx\` ON \`web_landing_blocks_block_banner_01\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_banner_01_link_link_page_idx\` ON \`web_landing_blocks_block_banner_01\` (\`link_page_id\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_banner_01_locales\` (
  	\`title\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing_blocks_block_banner_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_landing_blocks_block_banner_01_locales_locale_parent_id_\` ON \`web_landing_blocks_block_banner_01_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_case_studies_02_items_stats_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing_blocks_block_case_studies_02_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_case_studies_02_items_stats_items_order_idx\` ON \`web_landing_blocks_block_case_studies_02_items_stats_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_case_studies_02_items_stats_items_parent_id_idx\` ON \`web_landing_blocks_block_case_studies_02_items_stats_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_case_studies_02_items_stats_items_locales\` (
  	\`title\` text,
  	\`subtitle\` text,
  	\`value\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing_blocks_block_case_studies_02_items_stats_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_landing_blocks_block_case_studies_02_items_stats_items_l\` ON \`web_landing_blocks_block_case_studies_02_items_stats_items_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_case_studies_02_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`logo_id\` integer,
  	\`thumbnail_id\` integer,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`thumbnail_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing_blocks_block_case_studies_02\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_case_studies_02_items_order_idx\` ON \`web_landing_blocks_block_case_studies_02_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_case_studies_02_items_parent_id_idx\` ON \`web_landing_blocks_block_case_studies_02_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_case_studies_02_items_logo_idx\` ON \`web_landing_blocks_block_case_studies_02_items\` (\`logo_id\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_case_studies_02_items_thumbnail_idx\` ON \`web_landing_blocks_block_case_studies_02_items\` (\`thumbnail_id\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_case_studies_02_items_locales\` (
  	\`author\` text,
  	\`role\` text,
  	\`quote\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing_blocks_block_case_studies_02_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_landing_blocks_block_case_studies_02_items_locales_local\` ON \`web_landing_blocks_block_case_studies_02_items_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_case_studies_02\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_case_studies_02_order_idx\` ON \`web_landing_blocks_block_case_studies_02\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_case_studies_02_parent_id_idx\` ON \`web_landing_blocks_block_case_studies_02\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_case_studies_02_path_idx\` ON \`web_landing_blocks_block_case_studies_02\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_case_studies_02_locales\` (
  	\`title\` text,
  	\`subtitle\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing_blocks_block_case_studies_02\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_landing_blocks_block_case_studies_02_locales_locale_pare\` ON \`web_landing_blocks_block_case_studies_02_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_community_01_social\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`network\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing_blocks_block_community_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_community_01_social_order_idx\` ON \`web_landing_blocks_block_community_01_social\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_community_01_social_parent_id_idx\` ON \`web_landing_blocks_block_community_01_social\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_community_01\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_community_01_order_idx\` ON \`web_landing_blocks_block_community_01\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_community_01_parent_id_idx\` ON \`web_landing_blocks_block_community_01\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_community_01_path_idx\` ON \`web_landing_blocks_block_community_01\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_community_01_locales\` (
  	\`title\` text,
  	\`subtitle\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing_blocks_block_community_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_landing_blocks_block_community_01_locales_locale_parent_\` ON \`web_landing_blocks_block_community_01_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_compliance_01_highlights\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`icon_id\` integer,
  	FOREIGN KEY (\`icon_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing_blocks_block_compliance_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_compliance_01_highlights_order_idx\` ON \`web_landing_blocks_block_compliance_01_highlights\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_compliance_01_highlights_parent_id_idx\` ON \`web_landing_blocks_block_compliance_01_highlights\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_compliance_01_highlights_icon_idx\` ON \`web_landing_blocks_block_compliance_01_highlights\` (\`icon_id\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_compliance_01_highlights_locales\` (
  	\`title\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing_blocks_block_compliance_01_highlights\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_landing_blocks_block_compliance_01_highlights_locales_lo\` ON \`web_landing_blocks_block_compliance_01_highlights_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_compliance_01\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_compliance_01_order_idx\` ON \`web_landing_blocks_block_compliance_01\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_compliance_01_parent_id_idx\` ON \`web_landing_blocks_block_compliance_01\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_compliance_01_path_idx\` ON \`web_landing_blocks_block_compliance_01\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_compliance_01_locales\` (
  	\`badge\` text,
  	\`title\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing_blocks_block_compliance_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_landing_blocks_block_compliance_01_locales_locale_parent\` ON \`web_landing_blocks_block_compliance_01_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_cta_10\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`buttons_primary_is_external\` integer DEFAULT false,
  	\`buttons_primary_link_label\` text,
  	\`buttons_primary_link_url\` text,
  	\`buttons_primary_page_id\` integer,
  	\`buttons_secondary_is_external\` integer DEFAULT false,
  	\`buttons_secondary_link_label\` text,
  	\`buttons_secondary_link_url\` text,
  	\`buttons_secondary_page_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`buttons_primary_page_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`buttons_secondary_page_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_cta_10_order_idx\` ON \`web_landing_blocks_block_cta_10\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_cta_10_parent_id_idx\` ON \`web_landing_blocks_block_cta_10\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_cta_10_path_idx\` ON \`web_landing_blocks_block_cta_10\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_cta_10_buttons_primary_buttons__idx\` ON \`web_landing_blocks_block_cta_10\` (\`buttons_primary_page_id\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_cta_10_buttons_secondary_button_idx\` ON \`web_landing_blocks_block_cta_10\` (\`buttons_secondary_page_id\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_cta_10_locales\` (
  	\`heading\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing_blocks_block_cta_10\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_landing_blocks_block_cta_10_locales_locale_parent_id_uni\` ON \`web_landing_blocks_block_cta_10_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_cta_11\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_cta_11_order_idx\` ON \`web_landing_blocks_block_cta_11\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_cta_11_parent_id_idx\` ON \`web_landing_blocks_block_cta_11\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_cta_11_path_idx\` ON \`web_landing_blocks_block_cta_11\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_cta_11_image_idx\` ON \`web_landing_blocks_block_cta_11\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_cta_11_locales\` (
  	\`heading\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing_blocks_block_cta_11\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_landing_blocks_block_cta_11_locales_locale_parent_id_uni\` ON \`web_landing_blocks_block_cta_11_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_faq_01_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing_blocks_block_faq_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_faq_01_items_order_idx\` ON \`web_landing_blocks_block_faq_01_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_faq_01_items_parent_id_idx\` ON \`web_landing_blocks_block_faq_01_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_faq_01_items_locales\` (
  	\`question\` text,
  	\`answer\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing_blocks_block_faq_01_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_landing_blocks_block_faq_01_items_locales_locale_parent_\` ON \`web_landing_blocks_block_faq_01_items_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_faq_01\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_faq_01_order_idx\` ON \`web_landing_blocks_block_faq_01\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_faq_01_parent_id_idx\` ON \`web_landing_blocks_block_faq_01\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_faq_01_path_idx\` ON \`web_landing_blocks_block_faq_01\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_faq_01_locales\` (
  	\`heading\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing_blocks_block_faq_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_landing_blocks_block_faq_01_locales_locale_parent_id_uni\` ON \`web_landing_blocks_block_faq_01_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_hero_01_buttons\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`is_external\` integer DEFAULT false,
  	\`link_label\` text,
  	\`link_url\` text,
  	\`page_id\` integer,
  	FOREIGN KEY (\`page_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing_blocks_block_hero_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_hero_01_buttons_order_idx\` ON \`web_landing_blocks_block_hero_01_buttons\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_hero_01_buttons_parent_id_idx\` ON \`web_landing_blocks_block_hero_01_buttons\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_hero_01_buttons_page_idx\` ON \`web_landing_blocks_block_hero_01_buttons\` (\`page_id\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_hero_01\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_hero_01_order_idx\` ON \`web_landing_blocks_block_hero_01\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_hero_01_parent_id_idx\` ON \`web_landing_blocks_block_hero_01\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_hero_01_path_idx\` ON \`web_landing_blocks_block_hero_01\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_blocks_block_hero_01_image_idx\` ON \`web_landing_blocks_block_hero_01\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_blocks_block_hero_01_locales\` (
  	\`badge\` text,
  	\`heading\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_landing_blocks_block_hero_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_landing_blocks_block_hero_01_locales_locale_parent_id_un\` ON \`web_landing_blocks_block_hero_01_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_landing\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_status\` text DEFAULT 'draft',
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `)
  await db.run(sql`CREATE INDEX \`web_landing__status_idx\` ON \`web_landing\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`web_landing_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`cloud_photos_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`web_landing\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`cloud_photos_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_landing_rels_order_idx\` ON \`web_landing_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_rels_parent_idx\` ON \`web_landing_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_rels_path_idx\` ON \`web_landing_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`web_landing_rels_cloud_photos_id_idx\` ON \`web_landing_rels\` (\`cloud_photos_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_about_03_achievements_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v_blocks_block_about_03\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_about_03_achievements_items_order_idx\` ON \`_web_landing_v_blocks_block_about_03_achievements_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_about_03_achievements_items_parent_id_idx\` ON \`_web_landing_v_blocks_block_about_03_achievements_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_about_03_achievements_items_locales\` (
  	\`label\` text,
  	\`value\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v_blocks_block_about_03_achievements_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_landing_v_blocks_block_about_03_achievements_items_loca\` ON \`_web_landing_v_blocks_block_about_03_achievements_items_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_about_03\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`images_main_id\` integer,
  	\`images_secondary_id\` integer,
  	\`breakout_image_id\` integer,
  	\`breakout_button_is_external\` integer DEFAULT false,
  	\`breakout_button_link_label\` text,
  	\`breakout_button_link_url\` text,
  	\`breakout_button_page_id\` integer,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`images_main_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`images_secondary_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`breakout_image_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`breakout_button_page_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_about_03_order_idx\` ON \`_web_landing_v_blocks_block_about_03\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_about_03_parent_id_idx\` ON \`_web_landing_v_blocks_block_about_03\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_about_03_path_idx\` ON \`_web_landing_v_blocks_block_about_03\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_about_03_images_images_main_idx\` ON \`_web_landing_v_blocks_block_about_03\` (\`images_main_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_about_03_images_images_secon_idx\` ON \`_web_landing_v_blocks_block_about_03\` (\`images_secondary_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_about_03_breakout_breakout_i_idx\` ON \`_web_landing_v_blocks_block_about_03\` (\`breakout_image_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_about_03_breakout_button_bre_idx\` ON \`_web_landing_v_blocks_block_about_03\` (\`breakout_button_page_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_about_03_locales\` (
  	\`title\` text,
  	\`description\` text,
  	\`breakout_title\` text,
  	\`breakout_description\` text,
  	\`companies_title\` text,
  	\`achievements_title\` text,
  	\`achievements_description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v_blocks_block_about_03\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_landing_v_blocks_block_about_03_locales_locale_parent_i\` ON \`_web_landing_v_blocks_block_about_03_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_award_01_awards\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`year\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v_blocks_block_award_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_award_01_awards_order_idx\` ON \`_web_landing_v_blocks_block_award_01_awards\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_award_01_awards_parent_id_idx\` ON \`_web_landing_v_blocks_block_award_01_awards\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_award_01_awards_locales\` (
  	\`name\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v_blocks_block_award_01_awards\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_landing_v_blocks_block_award_01_awards_locales_locale_p\` ON \`_web_landing_v_blocks_block_award_01_awards_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_award_01\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_award_01_order_idx\` ON \`_web_landing_v_blocks_block_award_01\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_award_01_parent_id_idx\` ON \`_web_landing_v_blocks_block_award_01\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_award_01_path_idx\` ON \`_web_landing_v_blocks_block_award_01\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_banner_01\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`default_visible\` integer DEFAULT true,
  	\`link_is_external\` integer DEFAULT false,
  	\`link_link_label\` text,
  	\`link_link_url\` text,
  	\`link_page_id\` integer,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`link_page_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_banner_01_order_idx\` ON \`_web_landing_v_blocks_block_banner_01\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_banner_01_parent_id_idx\` ON \`_web_landing_v_blocks_block_banner_01\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_banner_01_path_idx\` ON \`_web_landing_v_blocks_block_banner_01\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_banner_01_link_link_page_idx\` ON \`_web_landing_v_blocks_block_banner_01\` (\`link_page_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_banner_01_locales\` (
  	\`title\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v_blocks_block_banner_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_landing_v_blocks_block_banner_01_locales_locale_parent_\` ON \`_web_landing_v_blocks_block_banner_01_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_case_studies_02_items_stats_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v_blocks_block_case_studies_02_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_case_studies_02_items_stats_items_order_idx\` ON \`_web_landing_v_blocks_block_case_studies_02_items_stats_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_case_studies_02_items_stats_items_parent_id_idx\` ON \`_web_landing_v_blocks_block_case_studies_02_items_stats_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_case_studies_02_items_stats_items_locales\` (
  	\`title\` text,
  	\`subtitle\` text,
  	\`value\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v_blocks_block_case_studies_02_items_stats_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_landing_v_blocks_block_case_studies_02_items_stats_item\` ON \`_web_landing_v_blocks_block_case_studies_02_items_stats_items_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_case_studies_02_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`logo_id\` integer,
  	\`thumbnail_id\` integer,
  	\`_uuid\` text,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`thumbnail_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v_blocks_block_case_studies_02\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_case_studies_02_items_order_idx\` ON \`_web_landing_v_blocks_block_case_studies_02_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_case_studies_02_items_parent_id_idx\` ON \`_web_landing_v_blocks_block_case_studies_02_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_case_studies_02_items_logo_idx\` ON \`_web_landing_v_blocks_block_case_studies_02_items\` (\`logo_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_case_studies_02_items_thumbn_idx\` ON \`_web_landing_v_blocks_block_case_studies_02_items\` (\`thumbnail_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_case_studies_02_items_locales\` (
  	\`author\` text,
  	\`role\` text,
  	\`quote\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v_blocks_block_case_studies_02_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_landing_v_blocks_block_case_studies_02_items_locales_lo\` ON \`_web_landing_v_blocks_block_case_studies_02_items_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_case_studies_02\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_case_studies_02_order_idx\` ON \`_web_landing_v_blocks_block_case_studies_02\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_case_studies_02_parent_id_idx\` ON \`_web_landing_v_blocks_block_case_studies_02\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_case_studies_02_path_idx\` ON \`_web_landing_v_blocks_block_case_studies_02\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_case_studies_02_locales\` (
  	\`title\` text,
  	\`subtitle\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v_blocks_block_case_studies_02\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_landing_v_blocks_block_case_studies_02_locales_locale_p\` ON \`_web_landing_v_blocks_block_case_studies_02_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_community_01_social\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`network\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v_blocks_block_community_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_community_01_social_order_idx\` ON \`_web_landing_v_blocks_block_community_01_social\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_community_01_social_parent_id_idx\` ON \`_web_landing_v_blocks_block_community_01_social\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_community_01\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_community_01_order_idx\` ON \`_web_landing_v_blocks_block_community_01\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_community_01_parent_id_idx\` ON \`_web_landing_v_blocks_block_community_01\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_community_01_path_idx\` ON \`_web_landing_v_blocks_block_community_01\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_community_01_locales\` (
  	\`title\` text,
  	\`subtitle\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v_blocks_block_community_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_landing_v_blocks_block_community_01_locales_locale_pare\` ON \`_web_landing_v_blocks_block_community_01_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_compliance_01_highlights\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`icon_id\` integer,
  	\`_uuid\` text,
  	FOREIGN KEY (\`icon_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v_blocks_block_compliance_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_compliance_01_highlights_order_idx\` ON \`_web_landing_v_blocks_block_compliance_01_highlights\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_compliance_01_highlights_parent_id_idx\` ON \`_web_landing_v_blocks_block_compliance_01_highlights\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_compliance_01_highlights_ico_idx\` ON \`_web_landing_v_blocks_block_compliance_01_highlights\` (\`icon_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_compliance_01_highlights_locales\` (
  	\`title\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v_blocks_block_compliance_01_highlights\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_landing_v_blocks_block_compliance_01_highlights_local_1\` ON \`_web_landing_v_blocks_block_compliance_01_highlights_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_compliance_01\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_compliance_01_order_idx\` ON \`_web_landing_v_blocks_block_compliance_01\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_compliance_01_parent_id_idx\` ON \`_web_landing_v_blocks_block_compliance_01\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_compliance_01_path_idx\` ON \`_web_landing_v_blocks_block_compliance_01\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_compliance_01_locales\` (
  	\`badge\` text,
  	\`title\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v_blocks_block_compliance_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_landing_v_blocks_block_compliance_01_locales_locale_par\` ON \`_web_landing_v_blocks_block_compliance_01_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_cta_10\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`buttons_primary_is_external\` integer DEFAULT false,
  	\`buttons_primary_link_label\` text,
  	\`buttons_primary_link_url\` text,
  	\`buttons_primary_page_id\` integer,
  	\`buttons_secondary_is_external\` integer DEFAULT false,
  	\`buttons_secondary_link_label\` text,
  	\`buttons_secondary_link_url\` text,
  	\`buttons_secondary_page_id\` integer,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`buttons_primary_page_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`buttons_secondary_page_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_cta_10_order_idx\` ON \`_web_landing_v_blocks_block_cta_10\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_cta_10_parent_id_idx\` ON \`_web_landing_v_blocks_block_cta_10\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_cta_10_path_idx\` ON \`_web_landing_v_blocks_block_cta_10\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_cta_10_buttons_primary_butto_idx\` ON \`_web_landing_v_blocks_block_cta_10\` (\`buttons_primary_page_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_cta_10_buttons_secondary_but_idx\` ON \`_web_landing_v_blocks_block_cta_10\` (\`buttons_secondary_page_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_cta_10_locales\` (
  	\`heading\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v_blocks_block_cta_10\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_landing_v_blocks_block_cta_10_locales_locale_parent_id_\` ON \`_web_landing_v_blocks_block_cta_10_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_cta_11\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_cta_11_order_idx\` ON \`_web_landing_v_blocks_block_cta_11\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_cta_11_parent_id_idx\` ON \`_web_landing_v_blocks_block_cta_11\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_cta_11_path_idx\` ON \`_web_landing_v_blocks_block_cta_11\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_cta_11_image_idx\` ON \`_web_landing_v_blocks_block_cta_11\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_cta_11_locales\` (
  	\`heading\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v_blocks_block_cta_11\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_landing_v_blocks_block_cta_11_locales_locale_parent_id_\` ON \`_web_landing_v_blocks_block_cta_11_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_faq_01_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v_blocks_block_faq_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_faq_01_items_order_idx\` ON \`_web_landing_v_blocks_block_faq_01_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_faq_01_items_parent_id_idx\` ON \`_web_landing_v_blocks_block_faq_01_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_faq_01_items_locales\` (
  	\`question\` text,
  	\`answer\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v_blocks_block_faq_01_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_landing_v_blocks_block_faq_01_items_locales_locale_pare\` ON \`_web_landing_v_blocks_block_faq_01_items_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_faq_01\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_faq_01_order_idx\` ON \`_web_landing_v_blocks_block_faq_01\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_faq_01_parent_id_idx\` ON \`_web_landing_v_blocks_block_faq_01\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_faq_01_path_idx\` ON \`_web_landing_v_blocks_block_faq_01\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_faq_01_locales\` (
  	\`heading\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v_blocks_block_faq_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_landing_v_blocks_block_faq_01_locales_locale_parent_id_\` ON \`_web_landing_v_blocks_block_faq_01_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_hero_01_buttons\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`is_external\` integer DEFAULT false,
  	\`link_label\` text,
  	\`link_url\` text,
  	\`page_id\` integer,
  	\`_uuid\` text,
  	FOREIGN KEY (\`page_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v_blocks_block_hero_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_hero_01_buttons_order_idx\` ON \`_web_landing_v_blocks_block_hero_01_buttons\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_hero_01_buttons_parent_id_idx\` ON \`_web_landing_v_blocks_block_hero_01_buttons\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_hero_01_buttons_page_idx\` ON \`_web_landing_v_blocks_block_hero_01_buttons\` (\`page_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_hero_01\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_hero_01_order_idx\` ON \`_web_landing_v_blocks_block_hero_01\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_hero_01_parent_id_idx\` ON \`_web_landing_v_blocks_block_hero_01\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_hero_01_path_idx\` ON \`_web_landing_v_blocks_block_hero_01\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_blocks_block_hero_01_image_idx\` ON \`_web_landing_v_blocks_block_hero_01\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_blocks_block_hero_01_locales\` (
  	\`badge\` text,
  	\`heading\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_landing_v_blocks_block_hero_01\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_landing_v_blocks_block_hero_01_locales_locale_parent_id\` ON \`_web_landing_v_blocks_block_hero_01_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`version__status\` text DEFAULT 'draft',
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`snapshot\` integer,
  	\`published_locale\` text,
  	\`latest\` integer,
  	\`autosave\` integer
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_landing_v_version_version__status_idx\` ON \`_web_landing_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_created_at_idx\` ON \`_web_landing_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_updated_at_idx\` ON \`_web_landing_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_snapshot_idx\` ON \`_web_landing_v\` (\`snapshot\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_published_locale_idx\` ON \`_web_landing_v\` (\`published_locale\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_latest_idx\` ON \`_web_landing_v\` (\`latest\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_autosave_idx\` ON \`_web_landing_v\` (\`autosave\`);`)
  await db.run(sql`CREATE TABLE \`_web_landing_v_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`cloud_photos_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`_web_landing_v\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`cloud_photos_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_landing_v_rels_order_idx\` ON \`_web_landing_v_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_rels_parent_idx\` ON \`_web_landing_v_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_rels_path_idx\` ON \`_web_landing_v_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`_web_landing_v_rels_cloud_photos_id_idx\` ON \`_web_landing_v_rels\` (\`cloud_photos_id\`);`)
  await db.run(sql`CREATE TABLE \`web_navigation_blocks_subitem_default_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`page_id\` integer,
  	\`show_description\` integer DEFAULT false,
  	FOREIGN KEY (\`page_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_navigation_blocks_subitem_default\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_navigation_blocks_subitem_default_items_order_idx\` ON \`web_navigation_blocks_subitem_default_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_navigation_blocks_subitem_default_items_parent_id_idx\` ON \`web_navigation_blocks_subitem_default_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_navigation_blocks_subitem_default_items_page_idx\` ON \`web_navigation_blocks_subitem_default_items\` (\`page_id\`);`)
  await db.run(sql`CREATE TABLE \`web_navigation_blocks_subitem_default\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_navigation\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_navigation_blocks_subitem_default_order_idx\` ON \`web_navigation_blocks_subitem_default\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_navigation_blocks_subitem_default_parent_id_idx\` ON \`web_navigation_blocks_subitem_default\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_navigation_blocks_subitem_default_path_idx\` ON \`web_navigation_blocks_subitem_default\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`web_navigation_blocks_subitem_expanded_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`page_id\` integer,
  	\`show_description\` integer DEFAULT false,
  	\`is_highlighted\` integer DEFAULT false,
  	\`bg_image_id\` integer,
  	FOREIGN KEY (\`page_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`bg_image_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_navigation_blocks_subitem_expanded\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_navigation_blocks_subitem_expanded_items_order_idx\` ON \`web_navigation_blocks_subitem_expanded_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_navigation_blocks_subitem_expanded_items_parent_id_idx\` ON \`web_navigation_blocks_subitem_expanded_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_navigation_blocks_subitem_expanded_items_page_idx\` ON \`web_navigation_blocks_subitem_expanded_items\` (\`page_id\`);`)
  await db.run(sql`CREATE INDEX \`web_navigation_blocks_subitem_expanded_items_bg_image_idx\` ON \`web_navigation_blocks_subitem_expanded_items\` (\`bg_image_id\`);`)
  await db.run(sql`CREATE TABLE \`web_navigation_blocks_subitem_expanded\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_navigation\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_navigation_blocks_subitem_expanded_order_idx\` ON \`web_navigation_blocks_subitem_expanded\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_navigation_blocks_subitem_expanded_parent_id_idx\` ON \`web_navigation_blocks_subitem_expanded\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_navigation_blocks_subitem_expanded_path_idx\` ON \`web_navigation_blocks_subitem_expanded\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`web_navigation_nav_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`page_id\` integer,
  	FOREIGN KEY (\`page_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_navigation\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_navigation_nav_items_order_idx\` ON \`web_navigation_nav_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_navigation_nav_items_parent_id_idx\` ON \`web_navigation_nav_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_navigation_nav_items_page_idx\` ON \`web_navigation_nav_items\` (\`page_id\`);`)
  await db.run(sql`CREATE TABLE \`web_navigation_nav_items_locales\` (
  	\`label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_navigation_nav_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_navigation_nav_items_locales_locale_parent_id_unique\` ON \`web_navigation_nav_items_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_navigation\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`position\` text DEFAULT 'center',
  	\`_status\` text DEFAULT 'draft',
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `)
  await db.run(sql`CREATE INDEX \`web_navigation__status_idx\` ON \`web_navigation\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`_web_navigation_v_blocks_subitem_default_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`page_id\` integer,
  	\`show_description\` integer DEFAULT false,
  	\`_uuid\` text,
  	FOREIGN KEY (\`page_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_navigation_v_blocks_subitem_default\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_navigation_v_blocks_subitem_default_items_order_idx\` ON \`_web_navigation_v_blocks_subitem_default_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_navigation_v_blocks_subitem_default_items_parent_id_idx\` ON \`_web_navigation_v_blocks_subitem_default_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_navigation_v_blocks_subitem_default_items_page_idx\` ON \`_web_navigation_v_blocks_subitem_default_items\` (\`page_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_navigation_v_blocks_subitem_default\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_navigation_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_navigation_v_blocks_subitem_default_order_idx\` ON \`_web_navigation_v_blocks_subitem_default\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_navigation_v_blocks_subitem_default_parent_id_idx\` ON \`_web_navigation_v_blocks_subitem_default\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_navigation_v_blocks_subitem_default_path_idx\` ON \`_web_navigation_v_blocks_subitem_default\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_web_navigation_v_blocks_subitem_expanded_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`page_id\` integer,
  	\`show_description\` integer DEFAULT false,
  	\`is_highlighted\` integer DEFAULT false,
  	\`bg_image_id\` integer,
  	\`_uuid\` text,
  	FOREIGN KEY (\`page_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`bg_image_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_navigation_v_blocks_subitem_expanded\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_navigation_v_blocks_subitem_expanded_items_order_idx\` ON \`_web_navigation_v_blocks_subitem_expanded_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_navigation_v_blocks_subitem_expanded_items_parent_id_idx\` ON \`_web_navigation_v_blocks_subitem_expanded_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_navigation_v_blocks_subitem_expanded_items_page_idx\` ON \`_web_navigation_v_blocks_subitem_expanded_items\` (\`page_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_navigation_v_blocks_subitem_expanded_items_bg_image_idx\` ON \`_web_navigation_v_blocks_subitem_expanded_items\` (\`bg_image_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_navigation_v_blocks_subitem_expanded\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_navigation_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_navigation_v_blocks_subitem_expanded_order_idx\` ON \`_web_navigation_v_blocks_subitem_expanded\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_navigation_v_blocks_subitem_expanded_parent_id_idx\` ON \`_web_navigation_v_blocks_subitem_expanded\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_navigation_v_blocks_subitem_expanded_path_idx\` ON \`_web_navigation_v_blocks_subitem_expanded\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_web_navigation_v_version_nav_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`page_id\` integer,
  	\`_uuid\` text,
  	FOREIGN KEY (\`page_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_navigation_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_navigation_v_version_nav_items_order_idx\` ON \`_web_navigation_v_version_nav_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_navigation_v_version_nav_items_parent_id_idx\` ON \`_web_navigation_v_version_nav_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_navigation_v_version_nav_items_page_idx\` ON \`_web_navigation_v_version_nav_items\` (\`page_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_navigation_v_version_nav_items_locales\` (
  	\`label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_navigation_v_version_nav_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_navigation_v_version_nav_items_locales_locale_parent_id\` ON \`_web_navigation_v_version_nav_items_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_navigation_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`version_position\` text DEFAULT 'center',
  	\`version__status\` text DEFAULT 'draft',
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`snapshot\` integer,
  	\`published_locale\` text,
  	\`latest\` integer,
  	\`autosave\` integer
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_navigation_v_version_version__status_idx\` ON \`_web_navigation_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_web_navigation_v_created_at_idx\` ON \`_web_navigation_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_web_navigation_v_updated_at_idx\` ON \`_web_navigation_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_web_navigation_v_snapshot_idx\` ON \`_web_navigation_v\` (\`snapshot\`);`)
  await db.run(sql`CREATE INDEX \`_web_navigation_v_published_locale_idx\` ON \`_web_navigation_v\` (\`published_locale\`);`)
  await db.run(sql`CREATE INDEX \`_web_navigation_v_latest_idx\` ON \`_web_navigation_v\` (\`latest\`);`)
  await db.run(sql`CREATE INDEX \`_web_navigation_v_autosave_idx\` ON \`_web_navigation_v\` (\`autosave\`);`)
  await db.run(sql`CREATE TABLE \`web_footer_blocks_web_footer_6_nav_links_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`is_external\` integer DEFAULT false,
  	\`link_label\` text,
  	\`link_url\` text,
  	\`page_id\` integer,
  	FOREIGN KEY (\`page_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_footer_blocks_web_footer_6_nav_links\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_footer_blocks_web_footer_6_nav_links_links_order_idx\` ON \`web_footer_blocks_web_footer_6_nav_links_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_footer_blocks_web_footer_6_nav_links_links_parent_id_idx\` ON \`web_footer_blocks_web_footer_6_nav_links_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_footer_blocks_web_footer_6_nav_links_links_page_idx\` ON \`web_footer_blocks_web_footer_6_nav_links_links\` (\`page_id\`);`)
  await db.run(sql`CREATE TABLE \`web_footer_blocks_web_footer_6_nav_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_footer_blocks_web_footer_6\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_footer_blocks_web_footer_6_nav_links_order_idx\` ON \`web_footer_blocks_web_footer_6_nav_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_footer_blocks_web_footer_6_nav_links_parent_id_idx\` ON \`web_footer_blocks_web_footer_6_nav_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_footer_blocks_web_footer_6_nav_links_locales\` (
  	\`group\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_footer_blocks_web_footer_6_nav_links\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`web_footer_blocks_web_footer_6_nav_links_locales_locale_pare\` ON \`web_footer_blocks_web_footer_6_nav_links_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`web_footer_blocks_web_footer_6\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_footer\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`web_footer_blocks_web_footer_6_order_idx\` ON \`web_footer_blocks_web_footer_6\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`web_footer_blocks_web_footer_6_parent_id_idx\` ON \`web_footer_blocks_web_footer_6\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`web_footer_blocks_web_footer_6_path_idx\` ON \`web_footer_blocks_web_footer_6\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`web_footer\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_status\` text DEFAULT 'draft',
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `)
  await db.run(sql`CREATE INDEX \`web_footer__status_idx\` ON \`web_footer\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`_web_footer_v_blocks_web_footer_6_nav_links_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`is_external\` integer DEFAULT false,
  	\`link_label\` text,
  	\`link_url\` text,
  	\`page_id\` integer,
  	\`_uuid\` text,
  	FOREIGN KEY (\`page_id\`) REFERENCES \`web_pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_footer_v_blocks_web_footer_6_nav_links\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_footer_v_blocks_web_footer_6_nav_links_links_order_idx\` ON \`_web_footer_v_blocks_web_footer_6_nav_links_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_footer_v_blocks_web_footer_6_nav_links_links_parent_id_idx\` ON \`_web_footer_v_blocks_web_footer_6_nav_links_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_footer_v_blocks_web_footer_6_nav_links_links_page_idx\` ON \`_web_footer_v_blocks_web_footer_6_nav_links_links\` (\`page_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_footer_v_blocks_web_footer_6_nav_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_footer_v_blocks_web_footer_6\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_footer_v_blocks_web_footer_6_nav_links_order_idx\` ON \`_web_footer_v_blocks_web_footer_6_nav_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_footer_v_blocks_web_footer_6_nav_links_parent_id_idx\` ON \`_web_footer_v_blocks_web_footer_6_nav_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_footer_v_blocks_web_footer_6_nav_links_locales\` (
  	\`group\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_footer_v_blocks_web_footer_6_nav_links\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_footer_v_blocks_web_footer_6_nav_links_locales_locale_p\` ON \`_web_footer_v_blocks_web_footer_6_nav_links_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_web_footer_v_blocks_web_footer_6\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_footer_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_footer_v_blocks_web_footer_6_order_idx\` ON \`_web_footer_v_blocks_web_footer_6\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_web_footer_v_blocks_web_footer_6_parent_id_idx\` ON \`_web_footer_v_blocks_web_footer_6\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_footer_v_blocks_web_footer_6_path_idx\` ON \`_web_footer_v_blocks_web_footer_6\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_web_footer_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`version__status\` text DEFAULT 'draft',
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`snapshot\` integer,
  	\`published_locale\` text,
  	\`latest\` integer,
  	\`autosave\` integer
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_footer_v_version_version__status_idx\` ON \`_web_footer_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_web_footer_v_created_at_idx\` ON \`_web_footer_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_web_footer_v_updated_at_idx\` ON \`_web_footer_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_web_footer_v_snapshot_idx\` ON \`_web_footer_v\` (\`snapshot\`);`)
  await db.run(sql`CREATE INDEX \`_web_footer_v_published_locale_idx\` ON \`_web_footer_v\` (\`published_locale\`);`)
  await db.run(sql`CREATE INDEX \`_web_footer_v_latest_idx\` ON \`_web_footer_v\` (\`latest\`);`)
  await db.run(sql`CREATE INDEX \`_web_footer_v_autosave_idx\` ON \`_web_footer_v\` (\`autosave\`);`)
  await db.run(sql`CREATE TABLE \`_web_settings_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`version_general_name\` text,
  	\`version_general_icon_id\` integer,
  	\`version_general_logo_id\` integer,
  	\`version_styles_radius\` numeric DEFAULT 10,
  	\`version_styles_font_key\` text,
  	\`version_styles_font_family\` text,
  	\`version_styles_brand_bg\` text,
  	\`version_styles_brand_fg\` text,
  	\`version_styles_brand_palette_50\` text,
  	\`version_styles_brand_palette_100\` text,
  	\`version_styles_brand_palette_200\` text,
  	\`version_styles_brand_palette_300\` text,
  	\`version_styles_brand_palette_400\` text,
  	\`version_styles_brand_palette_500\` text,
  	\`version_styles_brand_palette_600\` text,
  	\`version_styles_brand_palette_700\` text,
  	\`version_styles_brand_palette_800\` text,
  	\`version_styles_brand_palette_900\` text,
  	\`version_styles_brand_palette_950\` text,
  	\`version_styles_secondary_bg\` text,
  	\`version_styles_secondary_fg\` text,
  	\`version_styles_secondary_palette_50\` text,
  	\`version_styles_secondary_palette_100\` text,
  	\`version_styles_secondary_palette_200\` text,
  	\`version_styles_secondary_palette_300\` text,
  	\`version_styles_secondary_palette_400\` text,
  	\`version_styles_secondary_palette_500\` text,
  	\`version_styles_secondary_palette_600\` text,
  	\`version_styles_secondary_palette_700\` text,
  	\`version_styles_secondary_palette_800\` text,
  	\`version_styles_secondary_palette_900\` text,
  	\`version_styles_secondary_palette_950\` text,
  	\`version_social_contact_email\` text,
  	\`version_social_contact_phone\` text,
  	\`version_social_networks_twitter\` text,
  	\`version_social_networks_facebook\` text,
  	\`version_social_networks_instagram\` text,
  	\`version_social_networks_linkedin\` text,
  	\`version_social_networks_tiktok\` text,
  	\`version_social_networks_whatsapp\` text,
  	\`version_social_networks_youtube\` text,
  	\`version_social_networks_discord\` text,
  	\`version_social_networks_github\` text,
  	\`version__status\` text DEFAULT 'draft',
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`snapshot\` integer,
  	\`published_locale\` text,
  	\`latest\` integer,
  	\`autosave\` integer,
  	FOREIGN KEY (\`version_general_icon_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_general_logo_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_web_settings_v_version_general_version_general_icon_idx\` ON \`_web_settings_v\` (\`version_general_icon_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_settings_v_version_general_version_general_logo_idx\` ON \`_web_settings_v\` (\`version_general_logo_id\`);`)
  await db.run(sql`CREATE INDEX \`_web_settings_v_version_version__status_idx\` ON \`_web_settings_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_web_settings_v_created_at_idx\` ON \`_web_settings_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_web_settings_v_updated_at_idx\` ON \`_web_settings_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_web_settings_v_snapshot_idx\` ON \`_web_settings_v\` (\`snapshot\`);`)
  await db.run(sql`CREATE INDEX \`_web_settings_v_published_locale_idx\` ON \`_web_settings_v\` (\`published_locale\`);`)
  await db.run(sql`CREATE INDEX \`_web_settings_v_latest_idx\` ON \`_web_settings_v\` (\`latest\`);`)
  await db.run(sql`CREATE INDEX \`_web_settings_v_autosave_idx\` ON \`_web_settings_v\` (\`autosave\`);`)
  await db.run(sql`CREATE TABLE \`_web_settings_v_locales\` (
  	\`version_general_description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_web_settings_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_web_settings_v_locales_locale_parent_id_unique\` ON \`_web_settings_v_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_web_settings\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`general_name\` text,
  	\`general_icon_id\` integer,
  	\`general_logo_id\` integer,
  	\`styles_radius\` numeric DEFAULT 10,
  	\`styles_font_key\` text,
  	\`styles_font_family\` text,
  	\`styles_brand_bg\` text,
  	\`styles_brand_fg\` text,
  	\`styles_brand_palette_50\` text,
  	\`styles_brand_palette_100\` text,
  	\`styles_brand_palette_200\` text,
  	\`styles_brand_palette_300\` text,
  	\`styles_brand_palette_400\` text,
  	\`styles_brand_palette_500\` text,
  	\`styles_brand_palette_600\` text,
  	\`styles_brand_palette_700\` text,
  	\`styles_brand_palette_800\` text,
  	\`styles_brand_palette_900\` text,
  	\`styles_brand_palette_950\` text,
  	\`styles_secondary_bg\` text,
  	\`styles_secondary_fg\` text,
  	\`styles_secondary_palette_50\` text,
  	\`styles_secondary_palette_100\` text,
  	\`styles_secondary_palette_200\` text,
  	\`styles_secondary_palette_300\` text,
  	\`styles_secondary_palette_400\` text,
  	\`styles_secondary_palette_500\` text,
  	\`styles_secondary_palette_600\` text,
  	\`styles_secondary_palette_700\` text,
  	\`styles_secondary_palette_800\` text,
  	\`styles_secondary_palette_900\` text,
  	\`styles_secondary_palette_950\` text,
  	\`social_contact_email\` text,
  	\`social_contact_phone\` text,
  	\`social_networks_twitter\` text,
  	\`social_networks_facebook\` text,
  	\`social_networks_instagram\` text,
  	\`social_networks_linkedin\` text,
  	\`social_networks_tiktok\` text,
  	\`social_networks_whatsapp\` text,
  	\`social_networks_youtube\` text,
  	\`social_networks_discord\` text,
  	\`social_networks_github\` text,
  	\`_status\` text DEFAULT 'draft',
  	\`updated_at\` text,
  	\`created_at\` text,
  	FOREIGN KEY (\`general_icon_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`general_logo_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`INSERT INTO \`__new_web_settings\`("id", "general_name", "general_icon_id", "general_logo_id", "styles_radius", "styles_font_key", "styles_font_family", "styles_brand_bg", "styles_brand_fg", "styles_brand_palette_50", "styles_brand_palette_100", "styles_brand_palette_200", "styles_brand_palette_300", "styles_brand_palette_400", "styles_brand_palette_500", "styles_brand_palette_600", "styles_brand_palette_700", "styles_brand_palette_800", "styles_brand_palette_900", "styles_brand_palette_950", "styles_secondary_bg", "styles_secondary_fg", "styles_secondary_palette_50", "styles_secondary_palette_100", "styles_secondary_palette_200", "styles_secondary_palette_300", "styles_secondary_palette_400", "styles_secondary_palette_500", "styles_secondary_palette_600", "styles_secondary_palette_700", "styles_secondary_palette_800", "styles_secondary_palette_900", "styles_secondary_palette_950", "social_contact_email", "social_contact_phone", "social_networks_twitter", "social_networks_facebook", "social_networks_instagram", "social_networks_linkedin", "social_networks_tiktok", "social_networks_whatsapp", "social_networks_youtube", "social_networks_discord", "social_networks_github", "_status", "updated_at", "created_at") SELECT "id", "general_name", "general_icon_id", "general_logo_id", "styles_radius", "styles_font_key", "styles_font_family", "styles_brand_bg", "styles_brand_fg", "styles_brand_palette_50", "styles_brand_palette_100", "styles_brand_palette_200", "styles_brand_palette_300", "styles_brand_palette_400", "styles_brand_palette_500", "styles_brand_palette_600", "styles_brand_palette_700", "styles_brand_palette_800", "styles_brand_palette_900", "styles_brand_palette_950", "styles_secondary_bg", "styles_secondary_fg", "styles_secondary_palette_50", "styles_secondary_palette_100", "styles_secondary_palette_200", "styles_secondary_palette_300", "styles_secondary_palette_400", "styles_secondary_palette_500", "styles_secondary_palette_600", "styles_secondary_palette_700", "styles_secondary_palette_800", "styles_secondary_palette_900", "styles_secondary_palette_950", "social_contact_email", "social_contact_phone", "social_networks_twitter", "social_networks_facebook", "social_networks_instagram", "social_networks_linkedin", "social_networks_tiktok", "social_networks_whatsapp", "social_networks_youtube", "social_networks_discord", "social_networks_github", "_status", "updated_at", "created_at" FROM \`web_settings\`;`)
  await db.run(sql`DROP TABLE \`web_settings\`;`)
  await db.run(sql`ALTER TABLE \`__new_web_settings\` RENAME TO \`web_settings\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`web_settings_general_general_icon_idx\` ON \`web_settings\` (\`general_icon_id\`);`)
  await db.run(sql`CREATE INDEX \`web_settings_general_general_logo_idx\` ON \`web_settings\` (\`general_logo_id\`);`)
  await db.run(sql`CREATE INDEX \`web_settings__status_idx\` ON \`web_settings\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`__new_web_settings_locales\` (
  	\`general_description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`web_settings\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_web_settings_locales\`("general_description", "id", "_locale", "_parent_id") SELECT "general_description", "id", "_locale", "_parent_id" FROM \`web_settings_locales\`;`)
  await db.run(sql`DROP TABLE \`web_settings_locales\`;`)
  await db.run(sql`ALTER TABLE \`__new_web_settings_locales\` RENAME TO \`web_settings_locales\`;`)
  await db.run(sql`CREATE UNIQUE INDEX \`web_settings_locales_locale_parent_id_unique\` ON \`web_settings_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`web_pages_id\` integer REFERENCES web_pages(id);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_web_pages_id_idx\` ON \`payload_locked_documents_rels\` (\`web_pages_id\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`settings\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`site_name\` text,
  	\`icon_id\` integer,
  	\`logo_id\` integer,
  	\`updated_at\` text,
  	\`created_at\` text,
  	FOREIGN KEY (\`icon_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`settings_icon_idx\` ON \`settings\` (\`icon_id\`);`)
  await db.run(sql`CREATE INDEX \`settings_logo_idx\` ON \`settings\` (\`logo_id\`);`)
  await db.run(sql`CREATE TABLE \`settings_locales\` (
  	\`site_description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`settings\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`settings_locales_locale_parent_id_unique\` ON \`settings_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_about_03_achievements_items\`;`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_about_03_achievements_items_locales\`;`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_about_03\`;`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_about_03_locales\`;`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_award_01_awards\`;`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_award_01_awards_locales\`;`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_award_01\`;`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_banner_01\`;`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_banner_01_locales\`;`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_case_studies_02_items_stats_items\`;`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_case_studies_02_items_stats_items_locales\`;`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_case_studies_02_items\`;`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_case_studies_02_items_locales\`;`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_case_studies_02\`;`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_case_studies_02_locales\`;`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_community_01_social\`;`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_community_01\`;`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_community_01_locales\`;`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_compliance_01_highlights\`;`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_compliance_01_highlights_locales\`;`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_compliance_01\`;`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_compliance_01_locales\`;`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_cta_10\`;`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_cta_10_locales\`;`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_cta_11\`;`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_cta_11_locales\`;`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_faq_01_items\`;`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_faq_01_items_locales\`;`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_faq_01\`;`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_faq_01_locales\`;`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_hero_01_buttons\`;`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_hero_01\`;`)
  await db.run(sql`DROP TABLE \`web_pages_blocks_block_hero_01_locales\`;`)
  await db.run(sql`DROP TABLE \`web_pages\`;`)
  await db.run(sql`DROP TABLE \`web_pages_locales\`;`)
  await db.run(sql`DROP TABLE \`web_pages_rels\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_about_03_achievements_items\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_about_03_achievements_items_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_about_03\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_about_03_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_award_01_awards\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_award_01_awards_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_award_01\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_banner_01\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_banner_01_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_case_studies_02_items_stats_items\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_case_studies_02_items_stats_items_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_case_studies_02_items\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_case_studies_02_items_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_case_studies_02\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_case_studies_02_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_community_01_social\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_community_01\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_community_01_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_compliance_01_highlights\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_compliance_01_highlights_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_compliance_01\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_compliance_01_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_cta_10\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_cta_10_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_cta_11\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_cta_11_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_faq_01_items\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_faq_01_items_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_faq_01\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_faq_01_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_hero_01_buttons\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_hero_01\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_blocks_block_hero_01_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_pages_v_rels\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_about_03_achievements_items\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_about_03_achievements_items_locales\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_about_03\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_about_03_locales\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_award_01_awards\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_award_01_awards_locales\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_award_01\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_banner_01\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_banner_01_locales\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_case_studies_02_items_stats_items\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_case_studies_02_items_stats_items_locales\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_case_studies_02_items\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_case_studies_02_items_locales\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_case_studies_02\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_case_studies_02_locales\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_community_01_social\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_community_01\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_community_01_locales\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_compliance_01_highlights\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_compliance_01_highlights_locales\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_compliance_01\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_compliance_01_locales\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_cta_10\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_cta_10_locales\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_cta_11\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_cta_11_locales\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_faq_01_items\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_faq_01_items_locales\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_faq_01\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_faq_01_locales\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_hero_01_buttons\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_hero_01\`;`)
  await db.run(sql`DROP TABLE \`web_landing_blocks_block_hero_01_locales\`;`)
  await db.run(sql`DROP TABLE \`web_landing\`;`)
  await db.run(sql`DROP TABLE \`web_landing_rels\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_about_03_achievements_items\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_about_03_achievements_items_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_about_03\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_about_03_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_award_01_awards\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_award_01_awards_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_award_01\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_banner_01\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_banner_01_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_case_studies_02_items_stats_items\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_case_studies_02_items_stats_items_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_case_studies_02_items\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_case_studies_02_items_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_case_studies_02\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_case_studies_02_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_community_01_social\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_community_01\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_community_01_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_compliance_01_highlights\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_compliance_01_highlights_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_compliance_01\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_compliance_01_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_cta_10\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_cta_10_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_cta_11\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_cta_11_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_faq_01_items\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_faq_01_items_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_faq_01\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_faq_01_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_hero_01_buttons\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_hero_01\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_blocks_block_hero_01_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v\`;`)
  await db.run(sql`DROP TABLE \`_web_landing_v_rels\`;`)
  await db.run(sql`DROP TABLE \`web_navigation_blocks_subitem_default_items\`;`)
  await db.run(sql`DROP TABLE \`web_navigation_blocks_subitem_default\`;`)
  await db.run(sql`DROP TABLE \`web_navigation_blocks_subitem_expanded_items\`;`)
  await db.run(sql`DROP TABLE \`web_navigation_blocks_subitem_expanded\`;`)
  await db.run(sql`DROP TABLE \`web_navigation_nav_items\`;`)
  await db.run(sql`DROP TABLE \`web_navigation_nav_items_locales\`;`)
  await db.run(sql`DROP TABLE \`web_navigation\`;`)
  await db.run(sql`DROP TABLE \`_web_navigation_v_blocks_subitem_default_items\`;`)
  await db.run(sql`DROP TABLE \`_web_navigation_v_blocks_subitem_default\`;`)
  await db.run(sql`DROP TABLE \`_web_navigation_v_blocks_subitem_expanded_items\`;`)
  await db.run(sql`DROP TABLE \`_web_navigation_v_blocks_subitem_expanded\`;`)
  await db.run(sql`DROP TABLE \`_web_navigation_v_version_nav_items\`;`)
  await db.run(sql`DROP TABLE \`_web_navigation_v_version_nav_items_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_navigation_v\`;`)
  await db.run(sql`DROP TABLE \`web_footer_blocks_web_footer_6_nav_links_links\`;`)
  await db.run(sql`DROP TABLE \`web_footer_blocks_web_footer_6_nav_links\`;`)
  await db.run(sql`DROP TABLE \`web_footer_blocks_web_footer_6_nav_links_locales\`;`)
  await db.run(sql`DROP TABLE \`web_footer_blocks_web_footer_6\`;`)
  await db.run(sql`DROP TABLE \`web_footer\`;`)
  await db.run(sql`DROP TABLE \`_web_footer_v_blocks_web_footer_6_nav_links_links\`;`)
  await db.run(sql`DROP TABLE \`_web_footer_v_blocks_web_footer_6_nav_links\`;`)
  await db.run(sql`DROP TABLE \`_web_footer_v_blocks_web_footer_6_nav_links_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_footer_v_blocks_web_footer_6\`;`)
  await db.run(sql`DROP TABLE \`_web_footer_v\`;`)
  await db.run(sql`DROP TABLE \`web_settings\`;`)
  await db.run(sql`DROP TABLE \`web_settings_locales\`;`)
  await db.run(sql`DROP TABLE \`_web_settings_v\`;`)
  await db.run(sql`DROP TABLE \`_web_settings_v_locales\`;`)
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_payload_locked_documents_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	\`cloud_photos_id\` integer,
  	\`cloud_documents_id\` integer,
  	\`payload_folders_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_locked_documents\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`cloud_photos_id\`) REFERENCES \`cloud_photos\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`cloud_documents_id\`) REFERENCES \`cloud_documents\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`payload_folders_id\`) REFERENCES \`payload_folders\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_payload_locked_documents_rels\`("id", "order", "parent_id", "path", "users_id", "cloud_photos_id", "cloud_documents_id", "payload_folders_id") SELECT "id", "order", "parent_id", "path", "users_id", "cloud_photos_id", "cloud_documents_id", "payload_folders_id" FROM \`payload_locked_documents_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents_rels\`;`)
  await db.run(sql`ALTER TABLE \`__new_payload_locked_documents_rels\` RENAME TO \`payload_locked_documents_rels\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_order_idx\` ON \`payload_locked_documents_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_parent_idx\` ON \`payload_locked_documents_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_path_idx\` ON \`payload_locked_documents_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_users_id_idx\` ON \`payload_locked_documents_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_cloud_photos_id_idx\` ON \`payload_locked_documents_rels\` (\`cloud_photos_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_cloud_documents_id_idx\` ON \`payload_locked_documents_rels\` (\`cloud_documents_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_payload_folders_id_idx\` ON \`payload_locked_documents_rels\` (\`payload_folders_id\`);`)
}
