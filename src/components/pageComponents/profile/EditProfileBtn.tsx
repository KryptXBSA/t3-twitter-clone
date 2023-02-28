export function EditProfileBtn({ onClick }: { onClick: any }) {
    return (
        <div onClick={onClick} className="flex flex-col text-right">
            <button className="mr-0 ml-auto  flex max-h-max  max-w-max  items-center justify-center whitespace-nowrap rounded-full border border-blue-500 bg-transparent py-2 px-4 font-bold text-blue-500 hover:border-blue-800 :border-blue-800 hover:shadow-lg focus:outline-none focus:ring">
                Edit Profile
            </button>
        </div>
    );
}
