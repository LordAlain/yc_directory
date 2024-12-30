import {defineField, defineType} from "sanity";
import {UserIcon} from "lucide-react";

export const author = defineType({
    name: "author",
    title: 'Author',
    type: 'document',
    icon: UserIcon,
    fields: [
        defineField({
            name: 'id',
            type: 'number',
        }),
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'username',
            type: 'number',
        }),
        defineField({
            name: 'email',
            type: 'number',
        }),
        defineField({
            name: 'image',
            type: 'url',
        }),
        defineField({
            name: 'pitch',
            type: 'markdown',
        }),
    ],
    // preview: {
    //     select: {
    //         title: 'name',
    //     }
    // }
})
