type Props = {
  children: any
  title: string
  className?: string
}

const PagesLayout = ({ children, title, className }: Props) => {
  return (
    <section className='p-6 md:px-24 md:py-12'>
      <h1 className='mb-8 text-indigo-200 text-3xl'>{title}</h1>
      <div className={className}>
        {children}
      </div>
    </section>
  )
}

export default PagesLayout