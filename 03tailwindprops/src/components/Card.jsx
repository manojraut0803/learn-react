function Card(props) {
  // function Card({username}) {

  console.log(props.username);
  // console.log(username);

  return (
    <>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-100 mt-10">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://images.pexels.com/photos/21622427/pexels-photo-21622427/free-photo-of-woman-in-hat-standing-on-rural-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{props.username}</div>
            <div className="text-slate-700 dark:text-slate-500">
             {props.profile}
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  );
}
export default Card;
