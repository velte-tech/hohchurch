import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../client";

export function urlFor(source) {
    return source && imageUrlBuilder(sanityClient).image(source);
}