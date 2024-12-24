"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createLead } from "@/app/actions";
import { Linkedin, ThumbsUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

interface FormData {
  name: string;
  message: string;
  email: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    message: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const leadResponse = await createLead({ ...formData });

      if (!(leadResponse.status === 200)) {
        throw new Error("Failed to create lead in the database.");
      }

      setFormData({
        name: "",
        message: "",
        email: "",
      });
      setSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card id='contattami' className='border-none mt-24'>
      <CardHeader>
        <CardTitle className='text-3xl font-bold '>Contattami</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='flex space-x-4'>
            <div className='w-full'>
              <Label htmlFor='name'>Name</Label>
              <Input
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className='w-full'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                name='email'
                type='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className='space-y-2'>
            <Label htmlFor='message'>Message</Label>
            <Textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <Button type='submit' disabled={loading} className='w-full'>
            {loading ? (
              <svg
                className='animate-spin h-5 w-5 mr-3 text-white'
                viewBox='0 0 24 24'
              >
                <circle
                  className='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'
                ></circle>
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 0116 0h2a10 10 0 10-20 0h2z'
                ></path>
              </svg>
            ) : (
              "Invia"
            )}
          </Button>
        </form>
      </CardContent>

      {success && <FormSuccessMessage onClose={() => setSuccess(false)} />}
    </Card>
  );
}

interface SuccessMessageProps {
  onClose: () => void;
}

const FormSuccessMessage: React.FC<SuccessMessageProps> = ({ onClose }) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm'>
      <div className='mx-4 w-full max-w-md rounded-lg bg-card p-6 shadow-lg sm:p-8'>
        <div className='flex flex-col items-center space-y-4'>
          <ThumbsUp className='h-12 w-12 text-green-500' />
          <div className='space-y-2 text-center'>
            <h3 className='text-2xl font-bold'>Ci sentiamo presto!</h3>
            <p className='text-muted-foreground'>
              Grazie per avermi contattato.
            </p>
          </div>
          <div className='flex space-x-4'>
            <Button onClick={onClose}>Chiudi</Button>
            <Link href='https://www.linkedin.com/in/francesco-fera-87097b232/'>
              <Button
                onClick={onClose}
                className='bg-blue-500 text-white items-center hover:bg-blue-700 '
              >
                <Linkedin /> Connettiamoci
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
