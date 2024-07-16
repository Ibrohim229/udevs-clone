"use client";

import React, { useState } from "react";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";
import { tools } from "../../data";
import { useTranslations } from "next-intl";

const Tools = () => {
  const [selectedTool, setSelectedTool] = useState("");
  const t = useTranslations("Tools");

  const handleToolChange = (value: React.SetStateAction<string>) => {
    setSelectedTool(value);
  };
  return (
    <div
      id="tools"
      className="bg_secondary_color flex flex-col gap-7 px-5 lg:px-16 pt-10 md:pt-20 pb-8 lg:pb-14 "
    >
      <h1 className="primary_color text-3xl font-semibold md:text-5xl">
        {t("title")}
      </h1>

      <FormControl>
        <RadioGroup
          onChange={(e) => handleToolChange(e.target.value)}
          className="grid grid-cols-2 md:flex md:flex-row md:gap-5 gap-x-1 px-3"
        >
          <FormControlLabel
            value="frontend"
            control={<Radio />}
            label={
              <Typography
                variant="body1"
                style={{ fontWeight: 600, fontSize: "1rem" }}
              >
                Frontend
              </Typography>
            }
          />
          <FormControlLabel
            value="backend"
            control={<Radio />}
            label={
              <Typography
                variant="body1"
                style={{ fontWeight: 600, fontSize: "1rem" }}
              >
                Backend
              </Typography>
            }
          />
          <FormControlLabel
            value="devops"
            control={<Radio />}
            label={
              <Typography
                variant="body1"
                style={{ fontWeight: 600, fontSize: "1rem" }}
              >
                Devops
              </Typography>
            }
          />
          <FormControlLabel
            value="testing"
            control={<Radio />}
            label={
              <Typography
                variant="body1"
                style={{ fontWeight: 600, fontSize: "1rem" }}
              >
                Testing
              </Typography>
            }
          />
          <FormControlLabel
            value="ux"
            control={<Radio />}
            label={
              <Typography
                variant="body1"
                style={{ fontWeight: 600, fontSize: "1rem" }}
              >
                UX/UI
              </Typography>
            }
          />
          <FormControlLabel
            value="infrastructure"
            control={<Radio />}
            label={
              <Typography
                variant="body1"
                style={{ fontWeight: 600, fontSize: "1rem" }}
              >
                Infrastructure
              </Typography>
            }
          />
          <FormControlLabel
            value="mobile"
            control={<Radio />}
            label={
              <Typography
                variant="body1"
                style={{ fontWeight: 600, fontSize: "1rem" }}
              >
                Mobile
              </Typography>
            }
          />
        </RadioGroup>
      </FormControl>

      <div className="grid grid-cols-5 lg:grid-cols-8 gap-2">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className={`${
              tool.usage === selectedTool ? "bg-blue-100 " : "bg-white "
            } flex flex-col gap-2 items-center justify-end rounded-lg px-3 py-3 transition-all`}
          >
            <img src={tool.icon} alt="icon" className="w-4 md:w-6" />
            <p className="text-[9px] text-center sm:text-sm ">{tool.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
