"use client";

import React from "react";
import Image from "next/image";
import { redirect, useParams, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import ActionTooltip from "../action-tooltip";
import { NavigateAction } from "next/dist/client/components/router-reducer/router-reducer-types";

interface NavigationItemProps {
  id: string;
  imageUrl: string;
  name: string;
}

const NavigationItem = ({ id, imageUrl, name }: NavigationItemProps) => {
  const params = useParams();
  const router = useRouter();

  return (
    <ActionTooltip side="right" align="center" label={name}>
      <div
        className="flex items-center justify-center"
        onClick={() => {
          router.push(`/server/${id}`);
        }}
      >
        <Image
          alt={name}
          src={imageUrl}
          width={40}
          height={40}
          className="rounded-md"
        ></Image>
      </div>
    </ActionTooltip>
  );
};

export default NavigationItem;
