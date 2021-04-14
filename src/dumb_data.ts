import { Convenio } from "./types";

export const headerItens = [
    {
        label: "Início",
        target_id: "home",
        active: true,
        published: true,
    },
    {
        label: "Projetos",
        target_id: "projetos",
        active: false,
        published: false,
    },
    {
        label: "Blog",
        target_id: "blog",
        url: "/blog",
        active: false,
        published: true,
    },
    // {
    //   label: "Sobre",
    //   target_id: "sobre",
    //   active: false,
    //   published: true,
    // },
    // {
    //   label: "Convênios",
    //   target_id: "blog",
    //   active: false,
    // published: true,
    // },
    {
        label: "Contato",
        target_id: "contato",
        active: false,
        published: true,
    },
];
