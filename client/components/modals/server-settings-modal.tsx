"use client";

import React, { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import FileUpload from "../file-upload";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";

const ServerSettingsModal = () => {
  const [server, setServer] = useState({});

  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === "settings";

  // need to load the already saved server info here so that the user can edit that information

  const onSubmit = () => {};

  const form = useForm();

  const isLoading = form.formState.isSubmitting;

  // here we need to load up the deatils of the server

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black overflow-hidden p-0">
        <DialogHeader className="pt-8 px-6"></DialogHeader>
        <DialogTitle className="text-2xl font-bold text-center">
          Server Setting
        </DialogTitle>
        <DialogDescription className="text-center text-zinc-500">
          You can change these settings anytime in the future
        </DialogDescription>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-8 px-6">
              <div className="flex items-center justify-center text-center">
                <FormField
                  control={form.control}
                  name="imageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        Server Image
                      </FormLabel>
                      <FormControl>
                        <FileUpload
                          endpoint="serverImage"
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Server Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="bg-zinc-300/50 border-0 "
                        placeholder="Enter server name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="bg-gray-100 px-6 py-4">
              <Button type="submit" variant={"primary"}>
                Save
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ServerSettingsModal;
