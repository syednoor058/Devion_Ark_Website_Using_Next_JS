import Image from "next/image";

function PartnersCard({ brandImg, brandAlt }) {
  return (
    <div className="w-full h-full border border-lightSecondary border-opacity-15">
      <Image
        src={brandImg}
        alt={brandAlt}
        className="w-full h-full object-fill"
      />
    </div>
  );
}

export default PartnersCard;
