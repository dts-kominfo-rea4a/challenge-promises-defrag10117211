// ! JANGAN DIMODIFIKASI
const promiseTheaterIXX = async () => {
  await new Promise((r) => setTimeout(r, 200));

  return new Promise((resolve) => {
    const hasilSetelahMenonton = [
      {
        namaFilm: 'FILM A',
        hasil: 'marah',
      },
      {
        namaFilm: 'FILM B',
        hasil: 'tidak marah',
      },
      {
        namaFilm: 'FILM C',
        hasil: 'marah',
      },
    ];

    return resolve(hasilSetelahMenonton);
  });
};

const promiseTheaterVGC = async () => {
  await new Promise((r) => setTimeout(r, 200));

  return new Promise((resolve) => {
    const hasilSetelahMenonton = [
      {
        namaFilm: 'Film VGC 1',
        hasil: 'marah',
      },
      {
        namaFilm: 'Film VGC 2',
        hasil: 'tidak marah',
      },
      {
        namaFile: 'Film VGC 3',
        hasil: 'marah',
      },
    ];

    return resolve(hasilSetelahMenonton);
  });
};

module.exports = {
  promiseTheaterIXX,
  promiseTheaterVGC,
};
