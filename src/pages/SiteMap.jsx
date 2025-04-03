import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";
import CustomNode from "../components/CustomNode";

const nodeTypes = {
  custom: CustomNode,
};

const SiteMap = () => {
  const { t } = useTranslation();

  const siteMapData = [
    {
      title: t("society"),
      pages: [
        { path: "/sahifa/jamiyat-haqida", label: t("about_society") },
        { path: "/sahifa/ish-grafigi", label: t("work_schedule") },
        {
          path: "/sahifa/guvohnoma-va-sertifikatlar",
          label: t("certificates"),
        },
        { path: "/sahifa/bank-rekvizitlari", label: t("bank_details") },
        {
          path: "/sahifa/zarbdor-elevatori-aj-predmeti-va-maqsadi",
          label: t("company_goal"),
        },
      ],
    },
    {
      title: t("structure"),
      pages: [
        { path: "/sahifa/kuzatuv-kengashi", label: t("supervisory_board") },
        { path: "/sahifa/boshqaruv", label: t("management") },
        { path: "/sahifa/taftish-komissiyasi", label: t("audit_commission") },
        {
          path: "/sahifa/shoba-va-tobe-xojalik-jamiyatlari",
          label: t("subsidiary_companies"),
        },
      ],
    },
    {
      title: t("investors"),
      pages: [
        { path: "/sahifa/guvohnoma", label: t("guvohnoma") },
        { path: "/sahifa/korporativ-hujjatlar", label: t("corporate_docs") },
        { path: "/sahifa/kapital-tuzilmasi", label: t("capital_structure") },
        {
          path: "/sahifa/affillangan-shaxslar",
          label: t("affiliated_persons"),
        },
        {
          path: "/sahifa/aksiyadorlarning-umumiy-yigilish-natijalari",
          label: t("shareholders_meeting"),
        },
        { path: "/sahifa/rivojlanish-strategiyasi", label: t("strategy") },
        { path: "/sahifa/biznes-rejalar", label: t("business_plans") },
        { path: "/sahifa/muhim-faktlar", label: t("key_facts") },
        { path: "/sahifa/hisobotlar", label: t("reports") },
        { path: "/sahifa/asosiy-korsatkichlar", label: t("main_indicators") },
        {
          path: "/sahifa/auditorlik-xulosalari",
          label: t("audit_conclusions"),
        },
        { path: "/sahifa/divedentlar", label: t("dividends") },
      ],
    },
    {
      title: t("media_center"),
      pages: [
        { path: "/news", label: t("news.heading") },
        { path: "/sayt-xaritasi", label: t("site_map") },
        { path: "/sahifa/pochta", label: t("mail") },
        { path: "/sahifa/bosh-ish-orinlari", label: t("vacancies") },
      ],
    },
  ];

  const { nodes, edges } = useMemo(() => {
    let id = 1;
    const nodes = [];
    const edges = [];
    const xStep = 400;
    const yStep = 100;

    siteMapData.forEach((section, sectionIdx) => {
      const sectionId = `section-${sectionIdx}`;
      const sectionX = sectionIdx * xStep;
      const sectionY = 0;

      nodes.push({
        id: sectionId,
        type: "custom",
        position: { x: sectionX, y: sectionY },
        data: { label: section.title, path: "#" },
        sourcePosition: "bottom",
        // sourcePosition: "left",
      });

      section.pages.forEach((page, pageIdx) => {
        const pageId = `page-${id++}`;
        const pageY = (pageIdx + 1) * yStep;

        nodes.push({
          id: pageId,
          type: "custom",
          position: { x: sectionX + 140, y: pageY },
          data: { label: page.label, path: page.path },
          targetPosition: "left",
        });

        edges.push({
          id: `e-${sectionId}-${pageId}`,
          source: sectionId,
          target: pageId,
          animated: true,
          type: "smoothstep",
        });
      });
    });

    return { nodes, edges };
  }, [t]);

  return (
    <div className="w-full h-screen px-4">
      <h1 className="text-3xl font-bold text-center mb-4">{t("site_map")}</h1>
      <div className="w-full h-[85vh] border rounded shadow">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          defaultViewport={{ x: 10, y: 0 }}
          defaultMarkerColor="red"
          minZoom={1}
        >
          <Background size={1} />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

export default SiteMap;
