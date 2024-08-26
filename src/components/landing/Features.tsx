const Features = () => {
  const features = [
    {
      title: "Laporan Digital yang Praktis",
      description:
        "iMemoraise memberikan laporan digital. Jadi, kamu nggak perlu khawatir lagi kalau kertas form hafalanmu hilang.",
      icon: "📊",
    },
    {
      title: "Fleksibel dan Mudah Digunakan",
      description:
        "Fleksibel digunakan di mana pun dan kapan pun buat lihat progres hafalanmu.",
      icon: "🌐",
    },
    {
      title: "Akses Cepat dan Terhubung Selalu",
      description:
        "Akses cepat lewat web dan aplikasi, membuatmu selalu terhubung dengan kami.",
      icon: "🔗",
    },
  ];

  return (
    <section className="px-16 py-24 bg-base-200/50">
      <p className="mb-8 text-3xl text-center">
        <b>Mengapa Harus iMemoraise?</b>
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="p-4 shadow-xl card bg-base-100">
            <div className="items-center text-center card-body">
              <div className="mb-4 text-6xl">{feature.icon}</div>
              <h3 className="my-4 card-title">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
