export {}
declare global {
  interface Section {
    header: string
    body: string
    imgs?: string[][]
  }
  interface Project {
    title: string
    month: string
    url: string
    link: string
    img: string
    desc: string
    time: string
    year: string
    content: Section[]
  }
  interface Position {
    x: number
    y: number
  }
}
