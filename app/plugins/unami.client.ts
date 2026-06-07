export default defineNuxtPlugin(() => {

    const runtimeConfig = useRuntimeConfig()


    const script = document.createElement('script')
    script.src = runtimeConfig.public.umamiUrl
    script.async = true
    script.dataset.websiteId = runtimeConfig.public.umamiId

    document.head.appendChild(script)
})
