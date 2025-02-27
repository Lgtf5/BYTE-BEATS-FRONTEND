const soundMap = {};
for (let i = 0; i < 24; i++) {
  soundMap[i + 60] = `src/assets/notes/${i + 1}.mp3`;
}

export default soundMap;