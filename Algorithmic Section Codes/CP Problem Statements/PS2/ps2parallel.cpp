#include<bits/stdc++.h>
using namespace std;
#include <omp.h>
#include <sys/time.h>
const int MAX = 1e5 + 5;

int answer;


bool dfs(vector<int>adj[],int u,vector<bool>&visited,vector<bool>&recStack) 
{ 
   #pragma omp if
    if(!visited[u]) 
    { 
        visited[u] = recStack[u] = true; 
  
        for(auto v : adj[u]) 
        { 
            if (!visited[v] && dfs(adj, v, visited, recStack)) 
                return true; 
            else if (recStack[v]) 
                return true; 
        } 
  
    } 

    recStack[u] = false;  
    return false; 
} 
    
signed main() 
{
   ios_base::sync_with_stdio(false);
   cin.tie(NULL);
   cout.tie(NULL);
    
    int tt = 1;
    cin >> tt;
    
   while(tt--)
    {
        
        int n, m;
        cin >> n >> m;

        vector<pair<int,int>>v(m); 

        for(int i = 0;i < m;++i)
            cin >> v[i].first >> v[i].second;

         

        
        answer = 0; 

        vector<int>adj[n+1];

        for(int i = 0;i < m;++i)
        {
            if(v[i].first != v[i].second)
            {
                adj[v[i].first].push_back(v[i].second);
                answer++;
            }
        }

        vector<bool>visited(n+1,false),recStack(n+1, false);

        struct timeval tv1, tv2;
        struct timezone tz;
        double elapsed;

        gettimeofday(&tv1, &tz);

        for(int i = 1;i <= n;++i)
        {
            #pragma omp parallel
            {
                #pragma omp if
                if(!visited[i] && dfs(adj, i, visited, recStack))
                    answer++;
            }
        }

        cout << answer << '\n';

         gettimeofday(&tv2, &tz);

        
        elapsed = (double) (tv2.tv_sec-tv1.tv_sec) + (double) (tv2.tv_usec-tv1.tv_usec) * 1.e-6;
        printf("elapsed time = %f seconds.\n", elapsed);
    }

   
}