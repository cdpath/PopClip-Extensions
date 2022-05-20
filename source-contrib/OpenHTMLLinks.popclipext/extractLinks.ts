import { parseHTML } from '@popclip/linkedom'

/**
 * Extracts the the "href" properties of all the links in an HTML document.
 * @param html HTML source code to scan
 * @returns String array of discovered links
 */
export function extractLinks (html: string): string[] {
  const { document } = parseHTML(html)
  var links = document.getElementsByTagName('a')
  links = links.map((element: any) => element.getAttribute('href'))
  return links.filter((link: any) => typeof link === 'string')
}
