import Image from "next/image";

export default function Home() {
  return (
  <div id="all-page">
    <header id="header" className="px-[25px] py-[5px] bg-[#f0f3f7] text-[#6D7588]">
          <div className="flex justify-between ">
            <div>
              <img src="./assets" alt="" />
              <div className="flex">Download Tokopedia App</div>
            </div>
            <div className="flex gap-[20px] justify-between cursor-pointer">
              <div>Tentang Tokopedia</div>
              <div>Mitra Tokopedia</div>
              <div>Pusat Edukasi Seller</div>
              <div>Promo</div>
              <div>Tokopedia Care</div>
            </div>
          </div>
    </header>
    <div id="body" className="px-[25px] py-[15px]">
      <img src="https://images.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg" alt="" />
    </div>
  </div>

  );
}
