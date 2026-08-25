"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { trackConversion } from "@/lib/tracking";

type FormState = {
  name: string;
  phone: string;
  inquiryType: "general" | "bulk-order" | "catering" | "feedback";
  date: string;
  guests: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  inquiryType: "general",
  date: "",
  guests: "",
  message: "",
  website: ""
};

export function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const payload = (await response.json()) as { ok: boolean; message?: string; errors?: string[] };

      if (!response.ok || !payload.ok) {
        toast.error(payload.errors?.[0] || payload.message || "Please check the form and try again.");
        return;
      }

      trackConversion("form_submit", { inquiryType: form.inquiryType });
      toast.success("Thanks. Your inquiry is ready to connect to the restaurant workflow.");
      setForm(initialState);
    } catch {
      toast.error("Something went wrong. Please call or WhatsApp the restaurant.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="rounded-2xl border border-border/70 bg-card p-5 sm:p-6" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            autoComplete="name"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
            inputMode="tel"
            autoComplete="tel"
            required
          />
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="inquiryType">Inquiry type</Label>
          <Select
            id="inquiryType"
            value={form.inquiryType}
            onChange={(event) => update("inquiryType", event.target.value as FormState["inquiryType"])}
          >
            <option value="general">General</option>
            <option value="bulk-order">Bulk order</option>
            <option value="catering">Catering</option>
            <option value="feedback">Feedback</option>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="date">Date</Label>
          <Input id="date" type="date" value={form.date} onChange={(event) => update("date", event.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="guests">Guests</Label>
          <Input
            id="guests"
            value={form.guests}
            onChange={(event) => update("guests", event.target.value)}
            inputMode="numeric"
            placeholder="Optional"
          />
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          placeholder={
            compact
              ? "Tell us what you need."
              : "Share your order preference, timing, guest count or any special request."
          }
          required
        />
      </div>

      <label className="hidden" aria-hidden="true">
        Website
        <input
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) => update("website", event.target.value)}
        />
      </label>

      <Button type="submit" className="mt-5 w-full sm:w-auto" disabled={loading}>
        <Send aria-hidden="true" />
        {loading ? "Sending..." : "Send Inquiry"}
      </Button>
    </form>
  );
}
