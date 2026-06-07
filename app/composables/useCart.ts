import { ref, computed} from "vue"

export function  useCart(){
    const items = ref<any[]>([])

    function add(product: any) {
        items.value.push(product)
    }

    function remove(id: number) {
        items.value = items.value.filter(p => p.id !== id)

    }
    function clear(){
        items.value = []
    }
    const total = computed(() =>
    items.value.reduce((sum, p) => sum + p.price, 0)

    )
    return {
        items,
        add,
        remove,
        clear,
        total
    }
}
