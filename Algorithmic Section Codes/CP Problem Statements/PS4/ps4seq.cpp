#include <bits/stdc++.h>
using namespace std;
#include <omp.h>
#include <sys/time.h>

int TAKE = 0;

const int MAX = 1e5 + 5;
int isprime[MAX];

struct custom_hash {// Credits: https://codeforces.com/blog/entry/62393
    static uint64_t splitmix64(uint64_t x) {
        // http://xorshift.di.unimi.it/splitmix64.c
        x += 0x9e3779b97f4a7c15;
        x = (x ^ (x >> 30)) * 0xbf58476d1ce4e5b9;
        x = (x ^ (x >> 27)) * 0x94d049bb133111eb;
        return x ^ (x >> 31);
    }

    size_t operator()(uint64_t x) const {
        static const uint64_t FIXED_RANDOM = chrono::steady_clock::now().time_since_epoch().count();
        return splitmix64(x + FIXED_RANDOM);
    }
    
    //declare : unordered_map<long long, int, custom_hash>mp;  
};

//to store smallest prime factor of number
void sieve()
{
    for(int i = 1;i < MAX;++i)
          isprime[i] = i;

    for(int i = 2;i < MAX;++i)
    {
        if(i == isprime[i])
        {
            for(int j = 2 * i;j <= MAX;j += i)
            {
                    if(isprime[j] == j)
                    isprime[j] = i;
            }
        }
    }

}
// A O(log n) function returning primefactorization 
 
vector<int>factorize(int x) 
{ 
    vector<int>res; 
    while (x != 1) 
    { 
        res.push_back(isprime[x]); 
        x = x / isprime[x]; 
    } 
    return res; 
} 

//function to store frequency of primefactors
unordered_map<int,int,custom_hash>mp; 
 unordered_map<int,int,custom_hash>MP; 
void store(int x)
{
	 while(x > 1)
                {
                    int val = isprime[x];
                    int cnt = 0;
                    while(isprime[x] == val)
                    {
                        x /= isprime[x];
                        cnt++;
                    }
                    if(TAKE == 1)
                        MP[val] += cnt;
                    else
                        mp[val] += cnt;
                }
}


signed main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    
    
    sieve();
    int testCases = 1;
    cin >> testCases;
    
    while(testCases--)
    {

       struct timeval tv1, tv2;
       struct timezone tz;
       double elapsed; 
       gettimeofday(&tv1, &tz);

       int n;
       cin >> n;
       
       vector<int>a(n);
       TAKE = 0;
       mp.clear();
       MP.clear();
        
       for(auto &it : a)
            {
                cin >> it;
                store(it);
            }
       
       int ans = -1;
   
       TAKE = 1;
       
       for(int i = 0;i < n;++i)
       {
           bool flg = true;
           store(a[i]);
           
          for(auto it : MP)
          {
             
              int val = mp[it.first];
              if(val != it.second)
              {
                  flg = false;
                  break;
              }
          }
          
          if(flg)
          {
              ans = i + 1;
              break;
          }
    
       }
       
       assert(ans != -1);
       
       cout << ans;
       
       cout << '\n';

       gettimeofday(&tv2, &tz);

        
       elapsed = (double) (tv2.tv_sec-tv1.tv_sec) + (double) (tv2.tv_usec-tv1.tv_usec) * 1.e-6;
       printf("elapsed time = %f seconds.\n", elapsed);
       
    }
}