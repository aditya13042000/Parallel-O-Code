#include <bits/stdc++.h>
#include <omp.h>
#include <sys/time.h>
using namespace std;
const int maxs = 503;
int n;

int a[maxs];
vector<vector<vector<int>>>dp;

int go(int pos,int prev,int x)
{
    if(pos > n)
        return 0;
    
    if(dp[pos][prev][x] != -1)
        return dp[pos][prev][x];
    
    int res = maxs;
    
    if(a[pos] > x && x >= prev)
       res = min(res,1 + go(pos + 1,x,a[pos]));
    
    if(a[pos] >= prev)
        res = min(res,go(pos + 1,a[pos],x));
    
    return dp[pos][prev][x] = res;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    
    int tt = 1;
    cin >> tt;
    
    while(tt--)
    {

        struct timeval tv1, tv2;
        struct timezone tz;
        double elapsed; 
        gettimeofday(&tv1, &tz);


        int x;
        cin >> n >> x;
        
        
        int maxx = -1;
        
        for(int i = 1;i <= n;++i)
        {
            cin >> a[i];
            maxx = max(maxx,a[i]);
          
        }
       
        maxx = max(maxx,x);
        dp.clear();
        
        dp.resize(n + 5,vector<vector<int>>(maxx + 2,vector<int>(maxx + 2,-1)));
        
        int res = go(1,0,x);
        
        if(res == maxs)
            res = -1;
        
        cout << res;
        
        
        cout << '\n';

        gettimeofday(&tv2, &tz);

        
        elapsed = (double) (tv2.tv_sec-tv1.tv_sec) + (double) (tv2.tv_usec-tv1.tv_usec) * 1.e-6;
        printf("elapsed time = %f seconds.\n", elapsed);
    }
}