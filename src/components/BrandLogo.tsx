type BrandLogoProps = {
  className?: string
  alt?: string
}

export function BrandLogo({ className = "", alt = "Riky Studio logo" }: BrandLogoProps) {
  return (
    <img
      src="/brand/logo.png"
      alt={alt}
      className={className}
      loading="eager"
      onError={(e) => {
        ;(e.currentTarget as HTMLImageElement).src = "/brand/logo.svg"
      }}
    />
  )
}
