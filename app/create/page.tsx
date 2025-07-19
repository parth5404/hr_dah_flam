"use client";

import React, { useState } from "react";
import { useStore } from "@/app/store";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User } from "@/app/interface";
import { ModeToggle } from "@/components/mode-toggle";

const departments = ["HR", "Sales", "IT", "Marketing", "Finance"];

const CreateUserPage = () => {
  const router = useRouter();
  const updateBears = useStore((state) => state.updateBears);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    dob: "",
    street: "",
    city: "",
    state: "",
    country: "",
    postcode: "",
    bio: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newUser: User = {
      name: { first: formData.firstName, last: formData.lastName, title: "Mr" },
      email: formData.email,
      dept: formData.department,
      rating: 1,
      bio: formData.bio,
      bookmark: false,
      login: {
        uuid: uuidv4(),
        username: "",
        password: "",
        salt: "",
        md5: "",
        sha1: "",
        sha256: "",
      },
      gender: "not specified",
      location: {
        street: { number: 0, name: formData.street },
        city: formData.city,
        state: formData.state,
        country: formData.country,
        postcode: formData.postcode,
        coordinates: { latitude: "0", longitude: "0" },
        timezone: { offset: "", description: "" },
      },
      dob: { date: formData.dob, age: 0 },
      registered: { date: new Date().toISOString(), age: 0 },
      phone: "",
      cell: "",
      id: { name: "", value: null },
      picture: {
        large: "https://randomuser.me/api/portraits/men/1.jpg",
        medium: "",
        thumbnail: "",
      },
      nat: "",
    };

    updateBears(newUser);
    toast.success(
      `${formData.firstName} ${formData.lastName} has been added successfully.`
    );
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Create New User
            </h1>
            <p className="text-muted-foreground mt-1">
              Fill in the form below to add a new user.
            </p>
          </div>
          <ModeToggle />
        </header>

        <form
          onSubmit={handleSubmit}
          className="bg-card p-6 sm:p-8 rounded-lg border shadow-sm"
        >
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john.doe@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <Label htmlFor="department">Department</Label>
                <Select
                  value={formData.department}
                  onValueChange={(value) =>
                    handleSelectChange("department", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept} value={dept}>
                        {dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input
                  id="dob"
                  name="dob"
                  type="date"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="street">Street</Label>
              <Input
                id="street"
                name="street"
                placeholder="123 Main St"
                value={formData.street}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  name="city"
                  placeholder="New York"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="state">State</Label>
                <Input
                  id="state"
                  name="state"
                  placeholder="NY"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  name="country"
                  placeholder="USA"
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="postcode">Postcode</Label>
                <Input
                  id="postcode"
                  name="postcode"
                  placeholder="10001"
                  value={formData.postcode}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                name="bio"
                placeholder="Write a short bio..."
                value={formData.bio}
                onChange={handleChange}
                className="min-h-[120px]"
              />
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-8">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/")}
            >
              Cancel
            </Button>
            <Button type="submit">Create User</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUserPage;
