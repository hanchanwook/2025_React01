import Avatar from "./Avatar";

export default function Profile(props) {
    return (
            <ul>
                {/* person 객체 */}
                <li><Avatar size={100} person={{name:'hong', imageId:'YfeOqp2'}} /></li>
                <li><Avatar size={100} person={{name:'park', imageId:'OKS67lh'}} /></li>
                <li><Avatar size={100} person={{name:'lee', imageId:'1bx5QH6'}} /></li>
            </ul>
    );
}   