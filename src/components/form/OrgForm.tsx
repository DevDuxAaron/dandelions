"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import * as React from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const FormSchema = z.object({
  id: z.string().min(2, {
    message: "",
  }),
  organization: z.string().min(2, {
    message: "Por favor introduce un CI válido",
  }),
  socialMedia: z.string().min(2, {
    message: "Descripción no válida.",
  }),
  contact: z.string().min(2, {
    message: "Introduce una dirección válida.",
  }),
  responsible: z.string().min(2, {
    message: "Introduce un contacto válido.",
  }),
  logo: z.string().min(2, {
    message: "Introduce una ciudad válida.",
  }),
})

export function OrgForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id: "",
      organization: "",
      socialMedia: "",
      contact: "",
      responsible: "",
      logo: "/assets/images/logo.jpg"
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // })
  }

  return (
    <Card className="w-[350px] md:w-[450px] lg:w-[650px]">
      <CardHeader>
        <CardTitle>
          <div className="flex flex-col gap-2 items-center justify-center">
            <Image src="/assets/images/logo.jpg" width={80} height={80} alt="logo" />
            <span>Comunidad Huella Cero</span>
          </div>
        </CardTitle>
        <CardDescription>Registra los datos sobre la organización que deseas subir.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="organization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre de la organización</FormLabel>
                  <FormControl>
                    <Input placeholder="La organización se llama..." {...field} className="w-full" />
                  </FormControl>
                  <FormDescription>
                    Ingresa el nombre de la organización.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="socialMedia"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Link de alguna red social de tu organización URL:</FormLabel>
                  <FormControl>
                    <Input placeholder="Link..." {...field} />
                  </FormControl>
                  <FormDescription>
                    Ingresa el link de Facebook o Instagram o Tiktok.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Número de contacto del proyecto</FormLabel>
                  <FormControl>
                    <Input placeholder="77007700" {...field} />
                  </FormControl>
                  <FormDescription>
                    Ingresa un número de contacto de la organización.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="responsible"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre de contacto responsable</FormLabel>
                  <FormControl>
                    <Input placeholder="Carlos S." {...field} />
                  </FormControl>
                  <FormDescription>
                    Ingresa el onmbre del contacto responsable.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="logo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Logo</FormLabel>
                  <FormControl>
                    <Input placeholder="Logo" {...field} disabled/>
                  </FormControl>
                  <FormDescription>
                    Arratra o sube el logo de la organización.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              <Button variant="lime" type="submit">Enviar</Button>
            </div>
          </form>
        </Form>
      </CardContent>
      {/* <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter> */}
    </Card>
  )
}
