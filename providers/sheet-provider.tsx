"use client";

import { useMountedState } from "react-use";

import { NewAccountSheet } from "@/features/accounts/components/new-account-sheet";
import { EditAccount } from "@/features/accounts/components/edit-account";

import { NewCategorySheet } from "@/features/categories/components/new-category-sheet";
import { EditCategory } from "@/features/categories/components/edit-category";

export const SheetProvider = () => {
  const isMounted = useMountedState();
  if (!isMounted) return null;

  return (
    <>
      <NewAccountSheet />
      <EditAccount />
      <NewCategorySheet />
      <EditCategory />
    </>
  );
};
