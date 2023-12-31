type Props = {
  children: any
  title: string
  className?: string
}

const PagesLayout = ({ children, title, className }: Props) => {
  return (
    <section className='p-6 md:px-32 md:py-12'>
      <h1 className='mb-8 text-customTitle text-3xl'>{title}</h1>
      <div className={className}>
        {children}
      </div>
    </section>
  )
}

export default PagesLayout