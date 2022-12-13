const PROJECT_DATA: Project[] = [
  {
    title: 'Lucidity',
    month: 'May',
    year: '2022',
    time: '1 month',
    url: 'ivrogne',
    link: 'https://sombersheep77.github.io/ivrogne/',
    img: 'ivrogne.png',
    desc: 'spotify wrapped but for texts',
    content: [],
  },
  {
    title: 'Personas',
    month: 'September',
    year: '2022',
    time: '2 weeks',
    url: 'personas',
    link: 'https://sombersheep77.github.io/uiux-project-1/',
    img: 'personas.png',
    desc: 'observations about the CIT elevator',
    content: [
      {
        header: 'The Interface',
        body: "While the average user will have no trouble getting to their destination, there exist some extreme edge cases when using this elevator. The CIT elevator has a pretty simple interface, no different than your average elevator. However, the one major quirk is the addition of swiping. During the day, up until around 6pm, all floors are accessible without swiping. After 6 or so, floors 3-5 require a swipe which only professors, grad students, and ta's have. Despite coming daily to this god forsaken building, I have no idea at exactly what time the access shuts off, but for the sake of this project, we can just say 6pm. \n\nPrimary issue: only certain people have access, but the accessibility rules are unclear",
      },
      {
        header: 'Three Observations',
        body: 'Students did not know about the swipe access rules. \nStudents found the swiping mechanism confusing \nStudents were frustrated by the elevator moving differently than expected',
      },
      {
        header: 'Two Personas',
        body: 'the aforementioned unlucky visitors',
        imgs: ['persona_1.png', 'persona_2.png'],
      },
      {
        header: 'One Storyboard',
        body: "swipeless sally's stressful story",
        imgs: [
          'storyboard/panel_1.png',
          'storyboard/panel_2.png',
          'storyboard/panel_3.png',
          'storyboard/panel_4.png',
          'storyboard/panel_5.png',
          'storyboard/panel_6.png',
          'storyboard/panel_7.png',
        ],
      },
    ],
  },
  {
    title: 'Responsive Redesign',
    month: 'October',
    year: '2022',
    time: '2 weeks',
    url: 'redesign',
    link: 'https://sombersheep77.github.io/uiux-project-2/',
    img: 'redesign.png',
    desc: "responsive redesign of 99 ranch market's site",
    content: [
      {
        header: 'Usability Problems',
        body: 'As for accessibility, the site did pretty well according to WebAIM, though it seemed like the website did not get scraped properly. There was only 1 error according to WebAIM. The site used aria labels and alt text for all images. The color contrast was also good, so I stuck with a similar color scheme.',
        imgs: ['issues.png'],
      },
      {
        header: 'Research',
        body: "Takeaways:\nAmazon's emphasis on price integer\nAmazon's price per unit\nTarget's two banners, with the sticky search bar\nTarget's usage of chips over large block of categories on left\nTarget's add to cart button to make purchasing faster\nTarget's locate store button since 99 Ranch Market is primarily brick and mortar",
        imgs: ['target.png', 'amazon.png'],
      },
    ],
  },
  {
    title: 'Development',
    month: 'November',
    year: '2022',
    time: '3 weeks',
    url: 'ivrogne',
    link: 'https://sombersheep77.github.io/ivrogne/',
    img: 'ivrogne.png',
    desc: 'website to find cocktail recipes and the necessary ingredients to make your favorite drinks.',
    content: [],
  },
]

export { PROJECT_DATA }
