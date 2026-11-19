/* Adhkar text for Detox · Focus Hub.
   Arabic and sources follow the order of the user's "Daily Adhkār" booklet.
   Qur'an text is the Uthmani text (checked with Tarteel). English lines are short meanings, not a formal translation. */
window.ADHKAR_DATA = (function () {
  var Q = {
    kursi: { ref: "2:255", ayat: ["ٱللَّهُ لَآ إِلَـٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ۚ لَا تَأْخُذُهُۥ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُۥ مَا فِى ٱلسَّمَـٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ مَن ذَا ٱلَّذِى يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَىْءٍ مِّنْ عِلْمِهِۦٓ إِلَّا بِمَا شَآءَ ۚ وَسِعَ كُرْسِيُّهُ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضَ ۖ وَلَا يَـُٔودُهُۥ حِفْظُهُمَا ۚ وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ"] },
    baqarahEnd: { ref: "2:285–286", ayat: [
      "ءَامَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيْهِ مِن رَّبِّهِۦ وَٱلْمُؤْمِنُونَ ۚ كُلٌّ ءَامَنَ بِٱللَّهِ وَمَلَـٰٓئِكَتِهِۦ وَكُتُبِهِۦ وَرُسُلِهِۦ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِۦ ۚ وَقَالُوا۟ سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ ٱلْمَصِيرُ",
      "لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَآ إِن نَّسِينَآ أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَآ إِصْرًا كَمَا حَمَلْتَهُۥ عَلَى ٱلَّذِينَ مِن قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِۦ ۖ وَٱعْفُ عَنَّا وَٱغْفِرْ لَنَا وَٱرْحَمْنَآ ۚ أَنتَ مَوْلَىٰنَا فَٱنصُرْنَا عَلَى ٱلْقَوْمِ ٱلْكَـٰفِرِينَ"] },
    kafirun: { ref: "Sūrat al-Kāfirūn (109)", basmalah: true, ayat: ["قُلْ يَـٰٓأَيُّهَا ٱلْكَـٰفِرُونَ", "لَآ أَعْبُدُ مَا تَعْبُدُونَ", "وَلَآ أَنتُمْ عَـٰبِدُونَ مَآ أَعْبُدُ", "وَلَآ أَنَا۠ عَابِدٌ مَّا عَبَدتُّمْ", "وَلَآ أَنتُمْ عَـٰبِدُونَ مَآ أَعْبُدُ", "لَكُمْ دِينُكُمْ وَلِىَ دِينِ"] },
    ikhlas: { ref: "Sūrat al-Ikhlāṣ (112)", basmalah: true, ayat: ["قُلْ هُوَ ٱللَّهُ أَحَدٌ", "ٱللَّهُ ٱلصَّمَدُ", "لَمْ يَلِدْ وَلَمْ يُولَدْ", "وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ"] },
    falaq: { ref: "Sūrat al-Falaq (113)", basmalah: true, ayat: ["قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ", "مِن شَرِّ مَا خَلَقَ", "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ", "وَمِن شَرِّ ٱلنَّفَّـٰثَـٰتِ فِى ٱلْعُقَدِ", "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ"] },
    nas: { ref: "Sūrat an-Nās (114)", basmalah: true, ayat: ["قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ", "مَلِكِ ٱلنَّاسِ", "إِلَـٰهِ ٱلنَّاسِ", "مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ", "ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ", "مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ"] }
  };
  var SALAWAT = "اَللّٰهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيْمَ وَعَلَىٰ آلِ إِبْرَاهِيْمَ، إِنَّكَ حَمِيْدٌ مَجِيْدٌ، اَللّٰهُمَّ بَارِكْ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَىٰ إِبْرَاهِيْمَ وَعَلَىٰ آلِ إِبْرَاهِيْمَ، إِنَّكَ حَمِيْدٌ مَجِيْدٌ";
  var TAHLIL = "لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيْرٌ";
  var BISM = "بِسْمِ اللهِ";

  // shared morning & evening (booklet items 1–7)
  var ME1 = [
    { t: "Āyat al-Kursī", q: [Q.kursi], src: "Ṭabarānī", en: "Allah's greatness, knowledge and protection over everything." },
    { t: "The three Quls", q: [Q.ikhlas, Q.falaq, Q.nas], n: 3, src: "Tirmidhī", en: "Each sūrah three times; enough for you against everything." },
    { t: "Sayyid al-Istighfār", ar: "اَللّٰهُمَّ أَنْتَ رَبِّيْ لَا إِلٰهَ إِلَّا أَنْتَ، خَلَقْتَنِيْ وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوْذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوْءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوْءُ بِذَنْبِيْ، فَاغْفِرْ لِيْ، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوْبَ إِلَّا أَنْتَ", src: "Bukhārī", en: "You are my Lord and I am Your servant. I admit Your favours and my sins, so forgive me; only You forgive sins." },
    { ar: "اَللّٰهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوْذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوْذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوْذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ", src: "Abū Dāwud", en: "Protection from worry, grief, helplessness, laziness, cowardice, stinginess, crushing debt and being overpowered by people." },
    { ar: "اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِيْ دِيْنِيْ وَدُنْيَايَ وَأَهْلِيْ وَمَالِيْ، اَللّٰهُمَّ اسْتُرْ عَوْرَاتِيْ وَآمِنْ رَوْعَاتِيْ، اَللّٰهُمَّ احْفَظْنِيْ مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِيْ، وَعَنْ يَمِيْنِيْ، وَعَنْ شِمَالِيْ، وَمِنْ فَوْقِيْ، وَأَعُوْذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِيْ", src: "Abū Dāwud", en: "Asking for well-being and pardon in religion, life, family and wealth; to have faults covered, fears calmed, and protection from every side." },
    { ar: "اَللّٰهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، فَاطِرَ السَّمٰوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيْكَهُ، أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا أَنْتَ، أَعُوْذُ بِكَ مِنْ شَرِّ نَفْسِيْ، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَىٰ نَفْسِيْ سُوْءًا، أَوْ أَجُرَّهُ إِلَىٰ مُسْلِمٍ", src: "Tirmidhī", en: "Refuge in the Knower of all from the evil of myself and of Shayṭān, and from harming myself or another Muslim." },
    { ar: "يَا حَيُّ يَا قَيُّوْمُ، بِرَحْمَتِكَ أَسْتَغِيْثُ، أَصْلِحْ لِيْ شَأْنِيْ كُلَّهُ، وَلَا تَكِلْنِيْ إِلَىٰ نَفْسِيْ طَرْفَةَ عَيْنٍ", src: "Nasā’ī", en: "O Ever-Living, Sustainer: by Your mercy fix all my affairs and never leave me to myself, even for a blink." }
  ];
  // shared morning & evening (booklet items 15–22)
  var ME2 = [
    { ar: "اَللّٰهُمَّ عَافِنِيْ فِيْ بَدَنِيْ، اَللّٰهُمَّ عَافِنِيْ فِيْ سَمْعِيْ، اَللّٰهُمَّ عَافِنِيْ فِيْ بَصَرِيْ، لَا إِلٰهَ إِلَّا أَنْتَ، اَللّٰهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وَأَعُوْذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلٰهَ إِلَّا أَنْتَ", n: 3, src: "Aḥmad", en: "Health in my body, hearing and sight; refuge from disbelief, poverty and the punishment of the grave." },
    { ar: "حَسْبِيَ اللهُ لَا إِلٰهَ إِلَّا هُوَ، عَلَيْهِ تَوَكَّلْتُ، وَهُوَ رَبُّ الْعَرْشِ الْعَظِيْمِ", n: 7, src: "Abū Dāwud", en: "Allah is enough for me; I rely on Him, Lord of the mighty Throne." },
    { ar: "رَضِيْتُ بِاللهِ رَبًّا، وَبِالْإِسْلَامِ دِيْنًا، وَبِمُحَمَّدٍ نَبِيًّا", n: 3, src: "Tirmidhī", en: "Content with Allah as Lord, Islam as religion and Muḥammad ﷺ as Prophet." },
    { ar: "بِسْمِ اللهِ الَّذِيْ لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيْعُ الْعَلِيْمُ", n: 3, src: "Tirmidhī", en: "In the name of Allah, with whose name nothing on earth or in the sky can harm." },
    { ar: "سُبْحَانَ اللهِ وَبِحَمْدِهِ", n: 100, src: "Muslim", en: "Glory and praise be to Allah." },
    { ar: TAHLIL, n: 100, src: "Bukhārī, Nasā’ī", en: "None is worshipped but Allah alone; His is the dominion and praise, and He can do all things." },
    { ar: "سُبْحَانَ اللهِ، اَلْحَمْدُ لِلّٰهِ، اَللهُ أَكْبَرُ", n: 100, src: "Nasā’ī", en: "Glory be to Allah, praise be to Allah, Allah is the Greatest." },
    { t: "Ṣalāh on the Prophet ﷺ", ar: SALAWAT, n: 10, src: "Ṭabarānī", en: "Blessings and peace on the Prophet ﷺ and his family, as on Ibrāhīm." }
  ];
  function mOrE(m) {
    var A = m ? "أَصْبَحْ" : "أَمْسَيْ", a = m ? "أَصْبَحَ" : "أَمْسَىٰ";
    var day = m ? "هٰذَا الْيَوْمِ" : "هٰذِهِ اللَّيْلَةِ", ba = m ? "بَعْدَهُ" : "بَعْدَهَا";
    return [
      { ar: "اَللّٰهُمَّ مَا " + a + " بِيْ مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ، فَمِنْكَ وَحْدَكَ لَا شَرِيْكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ", src: "Abū Dāwud", en: "Every blessing I or anyone has this " + (m ? "morning" : "evening") + " is from You alone, so all praise and thanks are Yours." },
      { ar: A + "نَا عَلَىٰ فِطْرَةِ الْإِسْلَامِ، وَعَلَىٰ كَلِمَةِ الْإِخْلَاصِ، وَعَلَىٰ دِيْنِ نَبِيِّنَا مُحَمَّدٍ، وَعَلَىٰ مِلَّةِ أَبِيْنَا إِبْرَاهِيْمَ حَنِيْفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِيْنَ", src: "Aḥmad", en: "We " + (m ? "start the day" : "reach the evening") + " upon Islam, tawḥīd, the religion of our Prophet ﷺ and the way of Ibrāhīm." },
      { ar: A + "تُ أُثْنِيْ عَلَيْكَ حَمْدًا، وَأَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ", n: 3, src: "Nasā’ī", en: "I praise You and bear witness that none is worshipped but Allah." },
      { ar: A + "نَا وَ" + a + " الْمُلْكُ لِلّٰهِ وَالْحَمْدُ لِلّٰهِ، لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيْرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِيْ " + day + " وَخَيْرَ مَا " + ba + "، وَأَعُوْذُ بِكَ مِنْ شَرِّ مَا فِيْ " + day + " وَشَرِّ مَا " + ba + "، رَبِّ أَعُوْذُ بِكَ مِنَ الْكَسَلِ وَسُوْءِ الْكِبَرِ، رَبِّ أَعُوْذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ", src: "Muslim", en: "The dominion belongs to Allah. I ask for the good of this " + (m ? "day" : "night") + " and what follows, and refuge from its evil, from laziness, bad old age, the Fire and the grave." },
      { ar: A + "نَا وَ" + a + " الْمُلْكُ لِلّٰهِ رَبِّ الْعَالَمِيْنَ، اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ خَيْرَ " + day + "، " + (m ? "فَتْحَهُ وَنَصْرَهُ وَنُوْرَهُ وَبَرَكَتَهُ وَهُدَاهُ" : "فَتْحَهَا وَنَصْرَهَا وَنُوْرَهَا وَبَرَكَتَهَا وَهُدَاهَا") + "، وَأَعُوْذُ بِكَ مِنْ شَرِّ مَا " + (m ? "فِيْهِ" : "فِيْهَا") + " وَشَرِّ مَا " + ba, src: "Abū Dāwud", en: "I ask for the good of this " + (m ? "day" : "night") + ": its openings, help, light, blessing and guidance, and refuge from its evil." },
      { ar: "اَللّٰهُمَّ إِنِّيْ " + A + "تُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ وَمَلَائِكَتَكَ وَجَمِيْعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللهُ لَا إِلٰهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيْكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُوْلُكَ", n: 4, src: "Abū Dāwud", en: "I call You, the bearers of the Throne, the angels and all creation to witness: You alone are Allah, and Muḥammad ﷺ is Your servant and Messenger." },
      { ar: m ? "اَللّٰهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوْتُ وَإِلَيْكَ النُّشُوْرُ" : "اَللّٰهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوْتُ وَإِلَيْكَ الْمَصِيْرُ", src: "Tirmidhī", en: "By You we reach the " + (m ? "morning and evening" : "evening and morning") + ", live and die, and to You is the " + (m ? "rising" : "return") + "." }
    ];
  }
  var morning = ME1.concat(mOrE(true), ME2, [
    { ar: "أَسْتَغْفِرُ اللهَ وَأَتُوْبُ إِلَيْهِ", n: 100, src: "Ṭabarānī", en: "I ask Allah's forgiveness and repent to Him." },
    { ar: "سُبْحَانَ اللهِ وَبِحَمْدِهِ، عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ", n: 3, src: "Muslim", en: "Glory and praise to Allah, as many as His creation, as much as pleases Him, the weight of His Throne and the ink of His words." }
  ]);
  var evening = ME1.concat(mOrE(false), ME2, [
    { ar: "أَعُوْذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ", n: 3, src: "Nasā’ī", en: "I seek refuge in Allah's perfect words from the evil of what He created." }
  ]);

  var sleep = [
    { t: "Sūrat as-Sajdah & Sūrat al-Mulk", ar: "الٓمٓ تَنزِيلُ … (السجدة) & تَبَٰرَكَ ٱلَّذِى … (الملك)", src: "Tirmidhī", en: "Recite both sūrahs in full before sleeping.", links: [["Open as-Sajdah (32)", "https://quran.com/32"], ["Open al-Mulk (67)", "https://quran.com/67"]] },
    { t: "Āyat al-Kursī", q: [Q.kursi], src: "Bukhārī", en: "A guardian from Allah stays with you and Shayṭān cannot come near until morning." },
    { t: "Last two āyāt of al-Baqarah", q: [Q.baqarahEnd], src: "Bukhārī", en: "They will be enough for you for the night." },
    { t: "Sūrat al-Kāfirūn", q: [Q.kafirun], src: "Tirmidhī", en: "A declaration of freedom from shirk." },
    { t: "The three Quls", q: [Q.ikhlas, Q.falaq, Q.nas], n: 3, src: "Bukhārī", en: "Recite them into your cupped hands, blow into them, then wipe over as much of your body as you can, starting with the head and face. Do this three times." },
    { t: "Tasbīḥ before sleep", ar: "سُبْحَانَ اللهِ ×٣٣ ، اَلْحَمْدُ لِلّٰهِ ×٣٣ ، اَللهُ أَكْبَرُ ×٣٤", n: 100, split: [33, 33, 34], src: "Bukhārī", en: "SubḥānAllāh 33, alḥamdulillāh 33, Allāhu akbar 34; better for you than a servant." },
    { ar: "بِاسْمِكَ رَبِّيْ وَضَعْتُ جَنْبِيْ، وَبِكَ أَرْفَعُهُ، إِنْ أَمْسَكْتَ نَفْسِيْ فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِيْنَ", src: "Bukhārī", en: "In Your name I lie down and rise. If You take my soul, have mercy on it; if You return it, protect it as You protect the righteous." },
    { ar: "اَللّٰهُمَّ قِنِيْ عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ", n: 3, src: "Tirmidhī", en: "Save me from Your punishment on the Day You raise Your servants." },
    { ar: "اَلْحَمْدُ لِلّٰهِ الَّذِيْ أَطْعَمَنَا وَسَقَانَا وَكَفَانَا وَآوَانَا، فَكَمْ مِمَّنْ لَا كَافِيَ لَهُ وَلَا مُؤْوِيَ", src: "Muslim", en: "Praise to Allah who fed us, gave us drink, sufficed us and sheltered us; so many have no one to suffice or shelter them." },
    ME1[5],
    { ar: "اَللّٰهُمَّ رَبَّ السَّمٰوَاتِ وَرَبَّ الْأَرْضِ وَرَبَّ الْعَرْشِ الْعَظِيْمِ، رَبَّنَا وَرَبَّ كُلِّ شَيْءٍ، فَالِقَ الْحَبِّ وَالنَّوَىٰ، وَمُنْزِلَ التَّوْرَاةِ وَالْإِنْجِيْلِ وَالْفُرْقَانِ، أَعُوْذُ بِكَ مِنْ شَرِّ كُلِّ شَيْءٍ أَنْتَ آخِذٌ بِنَاصِيَتِهِ، اَللّٰهُمَّ أَنْتَ الْأَوَّلُ فَلَيْسَ قَبْلَكَ شَيْءٌ، وَأَنْتَ الْآخِرُ فَلَيْسَ بَعْدَكَ شَيْءٌ، وَأَنْتَ الظَّاهِرُ فَلَيْسَ فَوْقَكَ شَيْءٌ، وَأَنْتَ الْبَاطِنُ فَلَيْسَ دُوْنَكَ شَيْءٌ، اِقْضِ عَنَّا الدَّيْنَ وَأَغْنِنَا مِنَ الْفَقْرِ", src: "Muslim", en: "Lord of everything, the First, Last, Most High and Most Near: protect me from all evil, settle our debts and free us from poverty." },
    { ar: "اَللّٰهُمَّ إِنِّيْ أَعُوْذُ بِوَجْهِكَ الْكَرِيْمِ، وَكَلِمَاتِكَ التَّامَّةِ، مِنْ شَرِّ مَا أَنْتَ آخِذٌ بِنَاصِيَتِهِ، اَللّٰهُمَّ أَنْتَ تَكْشِفُ الْمَغْرَمَ وَالْمَأْثَمَ، اَللّٰهُمَّ لَا يُهْزَمُ جُنْدُكَ، وَلَا يُخْلَفُ وَعْدُكَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ، سُبْحَانَكَ وَبِحَمْدِكَ", src: "Abū Dāwud", en: "Refuge in Your noble Face and perfect words. You remove debt and sin; Your army is never defeated and Your promise never broken." },
    { ar: "اَللّٰهُمَّ إِنَّكَ خَلَقْتَ نَفْسِيْ وَأَنْتَ تَوَفَّاهَا، لَكَ مَمَاتُهَا وَمَحْيَاهَا، إِنْ أَحْيَيْتَهَا فَاحْفَظْهَا، وَإِنْ أَمَتَّهَا فَاغْفِرْ لَهَا، اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ الْعَافِيَةَ", src: "Aḥmad", en: "You created my soul and You take it. If You keep it alive, protect it; if You take it, forgive it. I ask You for well-being." },
    { ar: "بِسْمِ اللهِ وَضَعْتُ جَنْبِيْ، اَللّٰهُمَّ اغْفِرْ لِيْ ذَنْبِيْ، وَأَخْسِئْ شَيْطَانِيْ، وَفُكَّ رِهَانِيْ، وَاجْعَلْنِيْ فِي النَّدِيِّ الْأَعْلَىٰ", src: "Abū Dāwud", en: "In Allah's name I lie down. Forgive my sins, drive away my devil, free me from my obligations and place me among the highest assembly." },
    { ar: "اَلْحَمْدُ لِلّٰهِ الَّذِيْ كَفَانِيْ وَآوَانِيْ، اَلْحَمْدُ لِلّٰهِ الَّذِيْ أَطْعَمَنِيْ وَسَقَانِيْ، اَلْحَمْدُ لِلّٰهِ الَّذِيْ مَنَّ عَلَيَّ فَأَفْضَلَ، اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ بِعِزَّتِكَ أَنْ تُنَجِّيَنِيْ مِنَ النَّارِ", src: "Ḥākim", en: "Praise to Allah who sufficed, sheltered, fed and favoured me. By Your might, save me from the Fire." },
    { ar: "اَللّٰهُمَّ بِاسْمِكَ أَمُوْتُ وَأَحْيَا", src: "Bukhārī", en: "O Allah, in Your name I die and I live." },
    { ar: TAHLIL + "، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ، سُبْحَانَ اللهِ، وَالْحَمْدُ لِلّٰهِ، وَلَا إِلٰهَ إِلَّا اللهُ، وَاللهُ أَكْبَرُ", src: "Nasā’ī", en: "Tawḥīd, then: no power except through Allah; glory, praise, none but Allah, Allah is the Greatest." },
    { ar: "اَللّٰهُمَّ أَسْلَمْتُ نَفْسِيْ إِلَيْكَ، وَفَوَّضْتُ أَمْرِيْ إِلَيْكَ، وَوَجَّهْتُ وَجْهِيْ إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِيْ إِلَيْكَ، رَغْبَةً وَرَهْبَةً إِلَيْكَ، لَا مَلْجَأَ وَلَا مَنْجَا مِنْكَ إِلَّا إِلَيْكَ، آمَنْتُ بِكِتَابِكَ الَّذِيْ أَنْزَلْتَ وَبِنَبِيِّكَ الَّذِيْ أَرْسَلْتَ", src: "Bukhārī", en: "I submit myself, my affairs, my face and my back to You, in hope and fear. There is no refuge from You except to You. Say this last, on your right side." }
  ];

  var salah = [
    { ar: "أَسْتَغْفِرُ اللهَ ×٣ ، اَللّٰهُمَّ أَنْتَ السَّلَامُ، وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ", src: "Muslim", en: "Astaghfirullāh three times, then: You are Peace and from You is peace; blessed are You, Owner of majesty and honour." },
    { ar: TAHLIL + "، اَللّٰهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ", src: "Bukhārī", en: "Tawḥīd, then: none can withhold what You give or give what You withhold, and no one's status helps him against You." },
    { ar: TAHLIL + "، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ، لَا إِلٰهَ إِلَّا اللهُ، وَلَا نَعْبُدُ إِلَّا إِيَّاهُ، لَهُ النِّعْمَةُ وَلَهُ الْفَضْلُ وَلَهُ الثَّنَاءُ الْحَسَنُ، لَا إِلٰهَ إِلَّا اللهُ مُخْلِصِيْنَ لَهُ الدِّيْنَ وَلَوْ كَرِهَ الْكَافِرُوْنَ", src: "Muslim", en: "We worship none but Him; His are all blessings, favour and the best praise, sincerely His even if the disbelievers dislike it." },
    { ar: "اَللّٰهُمَّ أَعِنِّيْ عَلَىٰ ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ", src: "Abū Dāwud", en: "O Allah, help me to remember You, thank You and worship You well." },
    { ar: "اَللّٰهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنَ الْبُخْلِ، وَأَعُوْذُ بِكَ مِنَ الْجُبْنِ، وَأَعُوْذُ بِكَ مِنْ أَنْ أُرَدَّ إِلَىٰ أَرْذَلِ الْعُمُرِ، وَأَعُوْذُ بِكَ مِنْ فِتْنَةِ الدُّنْيَا، وَأَعُوْذُ بِكَ مِنْ عَذَابِ الْقَبْرِ", src: "Bukhārī", en: "Refuge from stinginess, cowardice, the weakest old age, the trials of this world and the punishment of the grave." },
    { t: "Tasbīḥ after ṣalāh", ar: "سُبْحَانَ اللهِ ×٣٣ ، اَلْحَمْدُ لِلّٰهِ ×٣٣ ، اَللهُ أَكْبَرُ ×٣٣ ، " + TAHLIL + " ×١", n: 100, split: [33, 33, 33, 1], src: "Muslim", en: "33 each, then the tahlīl once to complete 100; sins forgiven even if like the foam of the sea." },
    { t: "Āyat al-Kursī", q: [Q.kursi], src: "Nasā’ī", en: "Nothing stands between you and Jannah except death." },
    { t: "The three Quls", q: [Q.ikhlas, Q.falaq, Q.nas], src: "Abū Dāwud", en: "Once after each ṣalāh." },
    { h: "After Fajr & Maghrib" },
    { ar: "لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، يُحْيِيْ وَيُمِيْتُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيْرٌ", n: 10, src: "Aḥmad", en: "Tawḥīd, adding: He gives life and causes death." },
    { ar: "اَللّٰهُمَّ أَجِرْنِيْ مِنَ النَّارِ", n: 7, src: "Abū Dāwud", en: "O Allah, save me from the Fire." },
    { h: "After Fajr" },
    { ar: "اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا", src: "Ibn Mājah", en: "I ask You for beneficial knowledge, good provision and accepted deeds." }
  ];

  var actions = [
    { h: "When one wakes up in the night", hAr: "من تعارّ من الليل" },
    { ar: TAHLIL + "، اَلْحَمْدُ لِلّٰهِ، وَسُبْحَانَ اللهِ، وَلَا إِلٰهَ إِلَّا اللهُ، وَاللهُ أَكْبَرُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ، اَللّٰهُمَّ اغْفِرْ لِيْ", src: "Bukhārī", en: "Then ask forgiveness or make du‘ā’: it is answered; pray and it is accepted." },
    { h: "When one wakes up", hAr: "عند الاستيقاظ من النوم" },
    { ar: "اَلْحَمْدُ لِلّٰهِ الَّذِيْ عَافَانِيْ فِيْ جَسَدِيْ، وَرَدَّ عَلَيَّ رُوْحِيْ، وَأَذِنَ لِيْ بِذِكْرِهِ", src: "Tirmidhī", en: "Praise to Allah who kept my body well, returned my soul and allowed me to remember Him." },
    { ar: "اَلْحَمْدُ لِلّٰهِ الَّذِيْ أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُوْرُ", src: "Bukhārī", en: "Praise to Allah who gave us life after death, and to Him is the rising." },
    { h: "Before entering the lavatory", hAr: "قبل دخول الخلاء" },
    { ar: BISM, src: "Tirmidhī", en: "In the name of Allah." },
    { ar: "اَللّٰهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ", src: "Bukhārī", en: "Refuge from male and female devils." },
    { h: "After coming out of the lavatory", hAr: "بعد الخروج من الخلاء" },
    { ar: "غُفْرَانَكَ", src: "Abū Dāwud", en: "I ask Your forgiveness." },
    { h: "Before wuḍū’", hAr: "قبل الوضوء" },
    { ar: BISM, src: "Abū Dāwud", en: "In the name of Allah." },
    { h: "After completing wuḍū’", hAr: "بعد الفراغ من الوضوء" },
    { ar: "أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ، اَللّٰهُمَّ اجْعَلْنِيْ مِنَ التَّوَّابِيْنَ، وَاجْعَلْنِيْ مِنَ الْمُتَطَهِّرِيْنَ", src: "Tirmidhī", en: "The shahādah, then: make me of those who repent and those who purify themselves." },
    { ar: "سُبْحَانَكَ اللّٰهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوْبُ إِلَيْكَ", src: "Nasā’ī: ‘Amal al-Yawm wa al-Laylah", en: "Glory and praise to You; none is worshipped but You; I seek Your forgiveness and repent to You." },
    { h: "Before removing clothes", hAr: "قبل خلع الملابس" },
    { ar: BISM, src: "Ṭabarānī", en: "In the name of Allah." },
    { h: "After wearing clothes", hAr: "بعد لبس الملابس" },
    { ar: "اَلْحَمْدُ لِلّٰهِ الَّذِيْ كَسَانِيْ هٰذَا الثَّوْبَ، وَرَزَقَنِيْهِ مِنْ غَيْرِ حَوْلٍ مِنِّيْ وَلَا قُوَّةٍ", src: "Abū Dāwud", en: "Praise to Allah who clothed me with this and provided it without any power of my own." },
    { h: "Before eating", hAr: "قبل الطعام" },
    { ar: BISM, src: "Tirmidhī", en: "In the name of Allah. (If you forget: بِسْمِ اللهِ أَوَّلَهُ وَآخِرَهُ)" },
    { h: "After eating", hAr: "بعد الفراغ من الطعام" },
    { ar: "اَلْحَمْدُ لِلّٰهِ الَّذِيْ أَطْعَمَنِيْ هٰذَا، وَرَزَقَنِيْهِ مِنْ غَيْرِ حَوْلٍ مِنِّيْ وَلَا قُوَّةٍ", src: "Tirmidhī", en: "Praise to Allah who fed me this and provided it without any power of my own." },
    { ar: "اَلْحَمْدُ لِلّٰهِ حَمْدًا كَثِيْرًا طَيِّبًا مُبَارَكًا فِيْهِ، غَيْرَ مَكْفِيٍّ وَلَا مُوَدَّعٍ، وَلَا مُسْتَغْنًى عَنْهُ رَبَّنَا", src: "Bukhārī", en: "Abundant, pure, blessed praise, never enough, never abandoned, never done without, our Lord." },
    { ar: "اَلْحَمْدُ لِلّٰهِ الَّذِيْ أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِيْنَ", src: "Tirmidhī", en: "Praise to Allah who fed us, gave us drink and made us Muslims." },
    { h: "When leaving the house", hAr: "عند الخروج من البيت" },
    { ar: "بِسْمِ اللهِ، تَوَكَّلْتُ عَلَى اللهِ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ", src: "Abū Dāwud", en: "In Allah's name, I rely on Allah; there is no power except through Allah." },
    { ar: "اَللّٰهُمَّ إِنِّيْ أَعُوْذُ بِكَ أَنْ أَضِلَّ أَوْ أُضَلَّ، أَوْ أَزِلَّ أَوْ أُزَلَّ، أَوْ أَظْلِمَ أَوْ أُظْلَمَ، أَوْ أَجْهَلَ أَوْ يُجْهَلَ عَلَيَّ", src: "Abū Dāwud", en: "Refuge from going astray or being led astray, slipping or being made to slip, wronging or being wronged, acting foolishly or being treated foolishly." },
    { h: "When entering the house", hAr: "عند دخول البيت" },
    { ar: "اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ خَيْرَ الْمَوْلَجِ، وَخَيْرَ الْمَخْرَجِ، بِسْمِ اللهِ وَلَجْنَا، وَبِسْمِ اللهِ خَرَجْنَا، وَعَلَى اللهِ رَبِّنَا تَوَكَّلْنَا", src: "Abū Dāwud", en: "I ask for the best entering and leaving. In Allah's name we enter and leave, and on our Lord we rely. Then greet your family." },
    { h: "Whilst going to the masjid", hAr: "الذهاب إلى المسجد" },
    { ar: "اَللّٰهُمَّ اجْعَلْ فِيْ قَلْبِيْ نُوْرًا، وَفِيْ بَصَرِيْ نُوْرًا، وَفِيْ سَمْعِيْ نُوْرًا، وَعَنْ يَمِيْنِيْ نُوْرًا، وَعَنْ يَسَارِيْ نُوْرًا، وَفَوْقِيْ نُوْرًا، وَتَحْتِيْ نُوْرًا، وَأَمَامِيْ نُوْرًا، وَخَلْفِيْ نُوْرًا، وَاجْعَلْ لِيْ نُوْرًا", src: "Bukhārī", en: "Place light in my heart, sight and hearing, on every side of me, and give me light." },
    { h: "When entering the masjid", hAr: "عند دخول المسجد" },
    { ar: "أَعُوْذُ بِاللهِ الْعَظِيْمِ، وَبِوَجْهِهِ الْكَرِيْمِ، وَسُلْطَانِهِ الْقَدِيْمِ، مِنَ الشَّيْطَانِ الرَّجِيْمِ", src: "Abū Dāwud", en: "Refuge in Allah the Mighty, His noble Face and eternal authority from the accursed Shayṭān." },
    { ar: "بِسْمِ اللهِ، وَالصَّلَاةُ وَالسَّلَامُ عَلَىٰ رَسُوْلِ اللهِ، اَللّٰهُمَّ اغْفِرْ لِيْ ذُنُوْبِيْ، اَللّٰهُمَّ افْتَحْ لِيْ أَبْوَابَ رَحْمَتِكَ", src: "Composite: Ibn Mājah & Ibn al-Sunnī", en: "Enter with the right foot. Forgive my sins and open for me the doors of Your mercy." },
    { h: "When leaving the masjid", hAr: "عند الخروج من المسجد" },
    { ar: "بِسْمِ اللهِ، وَالصَّلَاةُ وَالسَّلَامُ عَلَىٰ رَسُوْلِ اللهِ، اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ مِنْ فَضْلِكَ، اَللّٰهُمَّ اعْصِمْنِيْ مِنَ الشَّيْطَانِ الرَّجِيْمِ", src: "Composite: Ibn Mājah, Ibn al-Sunnī & Muslim", en: "Leave with the left foot. I ask You of Your bounty; protect me from the accursed Shayṭān." },
    { h: "Responding to the adhān", hAr: "أذكار الأذان" },
    { t: "Repeat after the mu’adhdhin", ar: "حَيَّ عَلَى الصَّلَاةِ ، حَيَّ عَلَى الْفَلَاحِ ← لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ", src: "Bukhārī, Muslim", en: "Repeat each phrase after him, except at “ḥayya ‘alaṣ-ṣalāh” and “ḥayya ‘alal-falāḥ”, where you say lā ḥawla wa lā quwwata illā billāh." },
    { h: "After the adhān is complete", hAr: "بعد الأذان" },
    { ar: "وَأَنَا أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، وَأَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ، رَضِيْتُ بِاللهِ رَبًّا، وَبِمُحَمَّدٍ رَسُوْلًا، وَبِالْإِسْلَامِ دِيْنًا", src: "Muslim", en: "I too bear witness; I am pleased with Allah as Lord, Muḥammad ﷺ as Messenger and Islam as religion. (Sins forgiven.)" },
    { t: "Ṣalāh on the Prophet ﷺ", ar: SALAWAT, src: "Muslim", en: "Then send blessings on the Prophet ﷺ." },
    { ar: "اَللّٰهُمَّ رَبَّ هٰذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلَاةِ الْقَائِمَةِ، آتِ مُحَمَّدًا الْوَسِيْلَةَ وَالْفَضِيْلَةَ، وَابْعَثْهُ مَقَامًا مَحْمُوْدًا الَّذِيْ وَعَدْتَّهُ", src: "Bukhārī", en: "Lord of this perfect call and established prayer, give Muḥammad ﷺ al-Wasīlah and virtue, and raise him to the praised station You promised. (His intercession becomes due.)" }
  ];

  var general = [
    { t: "Reciting the Qur’ān", ar: "قِرَاءَةُ الْقُرْآنِ", en: "The best dhikr." },
    { ar: TAHLIL, src: "Muwaṭṭa’", en: "The best statement said by all the Prophets." },
    { ar: "سُبْحَانَ اللهِ، وَالْحَمْدُ لِلّٰهِ، وَلَا إِلٰهَ إِلَّا اللهُ، وَاللهُ أَكْبَرُ", src: "Aḥmad · Tirmidhī", en: "The best words after the Qur’ān; they wipe away sins." },
    { ar: "سُبْحَانَ اللهِ وَبِحَمْدِهِ، سُبْحَانَ اللهِ الْعَظِيْمِ", src: "Bukhārī", en: "Light on the tongue, heavy on the scale, beloved to the Most Merciful." },
    { ar: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ", src: "Bukhārī", en: "A treasure from the treasures of Paradise." },
    { ar: "يَا ذَا الْجَلَالِ وَالْإِكْرَامِ", src: "Tirmidhī", en: "“Call on Allah often with this.”" },
    { ar: "يَا حَيُّ يَا قَيُّوْمُ، بِرَحْمَتِكَ أَسْتَغِيْثُ", src: "Tirmidhī", en: "What the Prophet ﷺ would say when distressed." },
    { t: "Ṣalāh on the Prophet ﷺ", ar: SALAWAT, src: "Nasā’ī", en: "10 blessings from Allah, 10 sins erased and 10 ranks raised." },
    { ar: "لَا إِلٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّيْ كُنْتُ مِنَ الظَّالِمِيْنَ", src: "Nasā’ī · Tirmidhī", en: "The du‘ā’ of Yūnus: for difficult times; Allah answers whoever calls with it." },
    { ar: "أَسْتَغْفِرُ اللهَ الْعَظِيْمَ الَّذِيْ لَا إِلٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّوْمُ وَأَتُوْبُ إِلَيْهِ", src: "Tirmidhī", en: "Sins forgiven, even if one fled from the battlefield." }
  ];

  return {
    tabs: [
      { id: "morning", name: "Morning", ar: "أذكار الصباح", when: "After Fajr until sunrise", items: morning, log: "morning" },
      { id: "evening", name: "Evening", ar: "أذكار المساء", when: "After ‘Aṣr until Maghrib (or after Maghrib)", items: evening, log: "evening" },
      { id: "salah", name: "After ṣalāh", ar: "الأذكار بعد الصلاة", when: "After each obligatory prayer", items: salah },
      { id: "sleep", name: "Before sleep", ar: "الأذكار قبل النوم", when: "In bed, before sleeping", items: sleep, log: "sleep" },
      { id: "actions", name: "Daily actions", ar: "الأذكار لأعمال أخرى", when: "Waking, wuḍū’, eating, the house, the masjid & the adhān", items: actions },
      { id: "general", name: "General", ar: "الأذكار العامة", when: "To say often, any time", items: general }
    ]
  };
})();
