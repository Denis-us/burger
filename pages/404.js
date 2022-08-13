import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from 'next/router'

const NotFoundPage = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])

    return (
        <div className="not-found">
            <h1>Ой...</h1>
            <h2>Такой страницы нет</h2>
            <p>Переход на <Link href='/'><a>главную страницу</a></Link> через 3 сек</p>
        </div>
    )
}

export default NotFoundPage