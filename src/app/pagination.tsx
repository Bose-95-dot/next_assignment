import Link from 'next/link'
export default async function Pagination({ page }: { page: number }) {
    return (
        <>
            <div className="flex justify-between mt-4">
                {page > 1 && (
                    <Link href={`/?page=${page - 1}`} className="p-2 bg-gray-300">
                        Previous
                    </Link>
                )}
                <Link href={`/?page=${page + 1}`} className="p-2 bg-gray-300">
                    Next
                </Link>
            </div>
        </>
    )
}
