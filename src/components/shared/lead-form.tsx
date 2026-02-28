"use client";

import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconLoader, IconCheckCircle, IconAlertCircle } from "@/components/icons";

interface LeadFormProps {
  className?: string;
}

const profilOptions = [
  "Expert-comptable",
  "Avocat",
  "DAF",
  "Collaborateur comptable",
  "Autre",
] as const;

export function LeadForm({ className }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const formData = new FormData(event.currentTarget);
    const body = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || undefined,
      profile: formData.get("profile") as string,
      message: (formData.get("message") as string) || undefined,
    };

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du formulaire.");
      }

      setStatus("success");
      (event.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("grid gap-5", className)}
      noValidate
    >
      {/* Nom complet */}
      <div className="grid gap-2">
        <Label htmlFor="lead-name">Nom complet *</Label>
        <Input
          id="lead-name"
          name="name"
          placeholder="Jean Dupont"
          required
          autoComplete="name"
        />
      </div>

      {/* Email professionnel */}
      <div className="grid gap-2">
        <Label htmlFor="lead-email">Email professionnel *</Label>
        <Input
          id="lead-email"
          name="email"
          type="email"
          placeholder="jean.dupont@cabinet.fr"
          required
          autoComplete="email"
        />
      </div>

      {/* Telephone */}
      <div className="grid gap-2">
        <Label htmlFor="lead-phone">
          T&eacute;l&eacute;phone{" "}
          <span className="text-muted-foreground font-normal">(optionnel)</span>
        </Label>
        <Input
          id="lead-phone"
          name="phone"
          type="tel"
          placeholder="06 12 34 56 78"
          autoComplete="tel"
        />
      </div>

      {/* Profil */}
      <div className="grid gap-2">
        <Label htmlFor="lead-profile">Profil *</Label>
        <select
          id="lead-profile"
          name="profile"
          required
          className="border-input bg-transparent h-9 w-full rounded-xl border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 md:text-sm"
          defaultValue=""
        >
          <option value="" disabled>
            S&eacute;lectionnez votre profil
          </option>
          {profilOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="grid gap-2">
        <Label htmlFor="lead-message">
          Message{" "}
          <span className="text-muted-foreground font-normal">(optionnel)</span>
        </Label>
        <Textarea
          id="lead-message"
          name="message"
          placeholder="D&eacute;crivez bri&egrave;vement votre besoin..."
          rows={4}
        />
      </div>

      {/* Submit */}
      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          <>
            <IconLoader className="size-4 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          "Envoyer votre demande"
        )}
      </Button>

      {/* Status messages */}
      {status === "success" && (
        <div className="flex items-center gap-2 rounded-md bg-emerald-50 border border-emerald-200 p-3 text-sm text-emerald-800">
          <IconCheckCircle className="size-4 shrink-0" />
          <p>Merci ! Nous vous recontacterons rapidement.</p>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-md bg-destructive/10 border border-destructive/20 p-3 text-sm text-destructive">
          <IconAlertCircle className="size-4 shrink-0" />
          <p>
            Une erreur est survenue. Veuillez r&eacute;essayer ou nous contacter
            directement.
          </p>
        </div>
      )}
    </form>
  );
}
