import sharp from 'sharp'

const src = 'public/cropped-logo-okragle-1.png'

await sharp(src).resize(32, 32).toFile('public/favicon-32x32.png')
console.log('✓ favicon-32x32.png')

await sharp(src).resize(16, 16).toFile('public/favicon-16x16.png')
console.log('✓ favicon-16x16.png')

await sharp(src).resize(180, 180).toFile('public/apple-touch-icon.png')
console.log('✓ apple-touch-icon.png')

await sharp(src).resize(192, 192).toFile('public/android-chrome-192x192.png')
console.log('✓ android-chrome-192x192.png')

await sharp(src).resize(512, 512).toFile('public/android-chrome-512x512.png')
console.log('✓ android-chrome-512x512.png')
