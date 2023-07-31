export const ProjectCard = () => {
  return (
    <div className="flex flex-col gap-4">
      <img src="https://source.unsplash.com/random/?laptop" alt="project" className="w-full aspect-video rounded-lg" />
      <div className="space-y-1">
        <p className="text-sm">July 23th, 2023</p>
        <h2>Modern Portfolio</h2>
        <p className="line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ex placeat illo eius eum iusto corrupti veniam perferendis recusandae hic.
        </p>
      </div>
    </div>
  )
}