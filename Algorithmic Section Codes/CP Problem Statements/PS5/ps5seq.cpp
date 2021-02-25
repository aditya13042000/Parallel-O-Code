#include <bits/stdc++.h>
using namespace std;
#include <omp.h>
#include <sys/time.h>
int ans;

struct trie{
    
    trie *child[26];
    int cnt;
};

trie *NewNode()
{
    struct trie *node = new trie();
    
    for(int i = 0;i < 26;++i)
    {
        node->child[i] = NULL;    
    }
    
    
    return node;
}

int dfs(trie *root,int height)
{
    if(root == NULL)
        return 0;
    
    int cnt = 0;
    for(int i = 0;i < 26;i++)
    {
        cnt += dfs(root->child[i],height + 1);
    }
    
    root->cnt = root->cnt - cnt;
    
    if(root->cnt > 1)
    {
        int n = (root->cnt / 2);
        int tmp = (height / 2) * (height / 2);
        ans += n * tmp;
        cnt += 2 * n;
    }
    
    delete root;
    return cnt;
}


void insert(trie *root,string s)
{
    
    int n = s.size();
    
    for(int i = 0;i < n;i++)
    {
        int ind = s[i] - 'a';
        
        if(root->child[ind] == NULL)
            root->child[ind] = NewNode();
        
        root = root->child[ind];
        
        root->cnt = root->cnt + 1;
    }
    
}



signed main()
{
    
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    
   
    int t = 1;
    cin >> t;
    
    
    while(t--)
    {

       struct timeval tv1, tv2;
       struct timezone tz;
       double elapsed; 
       gettimeofday(&tv1, &tz);

        int n;
        cin >> n;
        string s;
        
       struct trie *root = NewNode();
        
        while(n--)
        {
            cin >> s;
            int n = s.size();
            string S = s;
            reverse(S.begin(),S.end());
            string SS = "";
            
            for(int i = 0;i < n;++i)
            {
                SS += s[i];
                SS += S[i];
            }
            
            insert(root,SS);
            
        }
        
        ans = 0;
        
        dfs(root,0);
        
        cout << ans << '\n';

        gettimeofday(&tv2, &tz);

        
       elapsed = (double) (tv2.tv_sec-tv1.tv_sec) + (double) (tv2.tv_usec-tv1.tv_usec) * 1.e-6;
       printf("elapsed time = %f seconds.\n", elapsed);
    }
        
   
        
      
        
}