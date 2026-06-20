import "server-only";

// Kontrak tipe data murni yang strict dan aman
export type DictionaryData = {
  about: {
    title: string;
    desc: string;
  };
  label_name: string;
  label_exp: string;
  label_address: string;
  exp_title: string;
  exp_desc1: string;
  exp_role2: string;
  exp_desc2: string;
  exp_desc3: string;
  srv_title: string;
  srv_subtitle: string;
  srv_badge: string;
  srv_h1: string;
  srv_d1: string;
  srv_h2: string;
  srv_d2: string;
  srv_h3: string;
  srv_d3: string;
  srv_h4: string;
  srv_d4: string;
  mt_clients: string;
  mt_projects: string;
  port_subtitle: string;
  port_counter: string;
  cat_finance: string;
  cat_academic: string;
  cat_mgmt: string;
  cat_retail: string;
  cat_ecommerce: string;
  cat_logistics: string;
  btn_github: string;
  btn_top: string;
  label_cv: string;
  label_hire: string;
  mdl_close: string;
  mdl_spp_desc: string;
  mdl_ppdb_desc: string;
  mdl_rapor_desc: string;
  mdl_inv_desc: string;
  mdl_pos_desc: string;
  mdl_trv_desc: string;
};

const dictionaries = {
  en: () =>
    import("@/src/dictionaries/en.json").then(
      (module) => module.default as DictionaryData,
    ),
  id: () =>
    import("@/src/dictionaries/id.json").then(
      (module) => module.default as DictionaryData,
    ),
};

export const getDictionary = async (
  locale: "en" | "id",
): Promise<DictionaryData> => {
  return dictionaries[locale]?.() ?? dictionaries.en();
};
