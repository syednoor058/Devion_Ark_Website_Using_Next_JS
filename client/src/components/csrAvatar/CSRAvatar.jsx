"use client";

import { Avatar, AvatarGroup } from "@mui/material";

function CSRAvatar() {
  const groupImg = [
    { alt: "Md Azizul Hoque", src: "/testimonials/azizul.webp" },
    { alt: "Syed Mustafa Mehedi", src: "/testimonials/mehedi.webp" },
    { alt: "Rakib Shikder", src: "/testimonials/rakib.webp" },
    { alt: "Kazi Farhan Masum", src: "/testimonials/farhan_masum.webp" },
  ];
  return (
    <AvatarGroup>
      {groupImg.map((img, i) => (
        <Avatar
          key={i}
          alt={img.alt}
          src={img.src}
          sx={{ width: 56, height: 56 }}
        />
      ))}
      <Avatar sx={{ width: 56, height: 56, bgcolor: "#414141" }}>8+</Avatar>
    </AvatarGroup>
  );
}

export default CSRAvatar;
