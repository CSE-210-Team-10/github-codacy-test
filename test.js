/**
 * Fetch issue data from specified parameters.
 * @param { string } token The SSO token generated
 * @param { string } owner The owner of the repo
 */
export async function getIssues(token, owner, repo) {
    const url = `https://api.github.com/repos/${owner}/${repo}/issues`;
    consoe.log('here');
  
    try {
      const response = await fetch(url, {
        headers: {
          'Authorization': `${token}`,
          'X-GitHub-Api-Version': '2022-11-28'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch issues.');
      }
  
      const data = await response.json();
      return data;
  
    }
    catch (error) {
      console.log(error);
    }
  }