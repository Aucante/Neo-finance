export class SlugHelper {
    static slugify(value: string): string {
        return value.toLowerCase().replace(/\s+/g, '-');
    }
}
