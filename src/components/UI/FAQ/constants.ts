type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Pertanyaan yang sering muncul'];
export const mobileHeaderPhrase = ['Pertanyaaan', 'yang sering', 'muncul'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'Kenapa memilih PT. Swadharma Sangga Buana?',
    answer:
      'Karena kami menyediakan layanan operasional yang lengkap, profesional, dan terpercaya.',
  },
  {
    question: 'Apa keunggulan utama PT. Swadharma Sangga Buana?',
    answer:
      'Pengalaman luas, tenaga ahli kompeten, dan layanan yang cepat serta responsif.',
  },
  {
    question: 'Bagaimana kami membantu menghemat waktu dan biaya?',
    answer:
      'Kami menangani SDM, fasilitas, dan kendaraan sehingga perusahaan fokus pada inti bisnis.',
  },
  {
    question: 'Apa manfaat jangka panjang bekerja sama dengan kami?',
    answer:
      'Operasional lebih efisien, produktivitas meningkat, dan proses kerja lebih stabil.',
  },
];
