"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "./ui/Button";
import { Textarea } from "./ui/Textarea";
import { Image as ImageIcon, Smile, MapPin, X } from "lucide-react";

export interface PostState {
  content: string;
  image: File | null;
  location: string;
}

interface CreatePostProps {
  onSubmit?: (data: PostState) => void;
  className?: string;
  userAvatar?: string;
}

export default function CreatePost({
  onSubmit,
  className = "",
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=currentUser",
}: CreatePostProps) {
  // Single state holding all data for creating a post
  const [postData, setPostData] = useState<PostState>({
    content: "",
    image: null,
    location: "",
  });

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPostData((prev) => ({ ...prev, content: e.target.value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPostData((prev) => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const handleRemoveImage = () => {
    setPostData((prev) => ({ ...prev, image: null }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(postData);
    }
    // Reset state after submission
    setPostData({ content: "", image: null, location: "" });
  };

  const isSubmitDisabled = !postData.content.trim() && !postData.image;

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-3xl border border-slate-200 bg-white p-5 shadow-sm ${className}`}
    >
      <div className="flex gap-4">
        {/* User Avatar */}
        <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-slate-100">
          <img
            src={userAvatar}
            alt="User Avatar"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex-1 space-y-4">
          <Textarea
            placeholder="What's on your mind?"
            value={postData.content}
            onChange={handleContentChange}
            className="min-h-[100px] border-none bg-transparent p-0 text-slate-900 placeholder:text-slate-500 shadow-none focus:border-none focus:ring-0"
          />

          {/* Image Preview */}
          {postData.image && (
            <div className="relative overflow-hidden rounded-2xl border border-slate-200">
              <img
                src={URL.createObjectURL(postData.image)}
                alt="Upload preview"
                className="max-h-80 w-full object-cover"
              />
              <button
                type="button"
                onClick={handleRemoveImage}
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/60 text-white backdrop-blur-sm transition hover:bg-slate-900/80"
              >
                <X size={16} />
              </button>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-between border-t border-slate-100 pt-4">
            <div className="flex gap-2">
              <label className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-slate-500 transition hover:bg-blue-50 hover:text-blue-600">
                <ImageIcon size={18} />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>

              <button
                type="button"
                title="Add Emoji"
                className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-blue-50 hover:text-blue-600"
              >
                <Smile size={18} />
              </button>

              <button
                type="button"
                title="Add Location"
                className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-blue-50 hover:text-blue-600"
              >
                <MapPin size={18} />
              </button>
            </div>

            <Button
              type="submit"
              disabled={isSubmitDisabled}
              size="sm"
              className="w-auto px-6 py-2"
            >
              Post
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
