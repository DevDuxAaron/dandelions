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
  ci: z.string().min(2, {
    message: "Por favor introduce un CI válido",
  }),
  description: z.string().min(2, {
    message: "Descripción no válida.",
  }),
  address: z.string().min(2, {
    message: "Introduce una dirección válida.",
  }),
  contact: z.string().min(2, {
    message: "Introduce un contacto válido.",
  }),
  city: z.string().min(2, {
    message: "Introduce una ciudad válida.",
  }),
})

export function TrashForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id: "",
      ci: "",
      description: "",
      address: "",
      contact: "",
      city: "",
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
        <CardDescription>Registra los datos sobre la basura que deseas reportar.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="ci"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Número de carnet</FormLabel>
                  <FormControl>
                    <Input placeholder="11223344" {...field} className="w-full" />
                  </FormControl>
                  <FormDescription>
                    Ingresa tu número de carnet sin extensión.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descripción de la basura</FormLabel>
                  <FormControl>
                    <Input placeholder="La basura es..." {...field} />
                  </FormControl>
                  <FormDescription>
                    Ingresa una breve descripción de la basura.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dirección para recoger la basura</FormLabel>
                  <FormControl>
                    <Input placeholder="La basura está en..." {...field} />
                  </FormControl>
                  <FormDescription>
                    Ingresa la dirección de donde recoger la basura.
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
                  <FormLabel>Número de contacto</FormLabel>
                  <FormControl>
                    <Input placeholder="77007700" {...field} />
                  </FormControl>
                  <FormDescription>
                    Ingresa un número de contacto.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ciudad</FormLabel>
                  <FormControl>
                    <Input placeholder="Cochabamba" {...field} />
                  </FormControl>
                  <FormDescription>
                    Ingresa la ciudad de origen.
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
