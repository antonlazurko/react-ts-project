import { GithubUser } from "types";

export const isGithubUser = (user: any): user is GithubUser => {
    return 'id' in user;
}