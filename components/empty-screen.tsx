
interface EmptyScreenProps {
  title: string
  subtitle: string
  description: string
}


export function EmptyScreen({ title, subtitle, description }: EmptyScreenProps) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-2xl bg-zinc-50 sm:p-8 p-4 text-sm sm:text-base">
        <h1 className="text-2xl sm:text-3xl tracking-tight font-semibold max-w-fit inline-block">
          {title}
        </h1>
        <p className="leading-normal text-zinc-900">
         {subtitle}
        </p>
        <p className="leading-normal text-zinc-900">
          {description}
        </p>
      </div>
    </div>
  )
}
