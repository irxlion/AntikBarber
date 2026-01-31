/**
 * Converts a Google Drive sharing link into a direct viewable image link.
 * Handles:
 * 1. https://drive.google.com/file/d/[ID]/view...
 * 2. https://drive.google.com/open?id=[ID]
 * 3. Already direct links (returns as is)
 */
export const getDriveDirectLink = (url: string): string => {
  if (!url) return '';
  
  // If it's already a direct source or another domain, return it.
  if (!url.includes('drive.google.com')) return url;

  let id = '';
  
  // Pattern 1: /file/d/ID/view
  const fileIdPattern = /\/file\/d\/([a-zA-Z0-9_-]+)/;
  const fileIdMatch = url.match(fileIdPattern);
  
  // Pattern 2: ?id=ID
  const idParamPattern = /[?&]id=([a-zA-Z0-9_-]+)/;
  const idParamMatch = url.match(idParamPattern);

  if (fileIdMatch && fileIdMatch[1]) {
    id = fileIdMatch[1];
  } else if (idParamMatch && idParamMatch[1]) {
    id = idParamMatch[1];
  }

  if (id) {
    // Construct the direct export URL
    // Note: 'uc?export=view' is generally reliable for images, 
    // but high traffic might trigger rate limits on Google's side.
    return `https://drive.google.com/uc?export=view&id=${id}`;
  }

  return url;
};