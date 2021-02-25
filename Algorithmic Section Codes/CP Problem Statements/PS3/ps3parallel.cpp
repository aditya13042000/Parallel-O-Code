#include <bits/stdc++.h>
using namespace std;
#include <omp.h>
#include <sys/time.h>

const int maxs = 5000;
long long int fact[maxs];
long long int invfact[maxs];
const long long mod = 998244353;
 
inline long long add(long long a,long long b) 
{
    long long ADD = (a % mod + b % mod) % mod;
    return ADD;
}
inline long long mul(long long a,long long b) 
{
    long long MUL = (a % mod * b % mod) % mod;
    return MUL;
}
long long fastpow(long long x,long long y)
{
    long long res = 1;
    x = x % mod;
    while (y > 0)
    {
        #pragma omp if
        if(y & 1)
            res = (res * x) % mod;
        y = y >> 1;
        x = (x * x) % mod;
    }
    return res;
}
 
void pre()
{
    fact[0] = 1;
    int i;
    #pragma omp for private(i)
    for(i = 1;i < maxs;i++)
    {
        fact[i] = mul(i,fact[i - 1]);
    }
    
    --i;
    
    invfact[i] = fastpow(fact[i],mod - 2);
    
    #pragma omp for private(i)
    for(i--;i >= 0;--i)
    {
        invfact[i] = mul(invfact[i + 1],(i + 1));
    }
}
 
long long int ncr(long long int n,long long int r)
{
    #pragma omp if
    if(r > n || n < 0 || r < 0)
        return 0;
    
    long long int res = mul(mul(fact[n],invfact[r]),invfact[n-r]);
    
    return res;
}
 
const int maxs1 = 2e5 + 3;
long long int A[maxs1];
 
void pre1()
{
    A[1] = A[2] = 1;
    int i;
    #pragma omp for private(i)
    for(i = 3;i < maxs1;++i)
        A[i] = add(A[i - 1] , A[i - 2]);
}
 
signed main()
{
        
      int tt;
      cin >> tt;
      pre1();
      while(tt--)
      {
        

        
      
        long long int n,i,j;
        cin >> n;
           
        long long int ways = A[n];
    
        #define pragma parallel{
        struct timeval tv1, tv2;
        struct timezone tz;
        double elapsed; 
        gettimeofday(&tv1, &tz);
               
        long long int denm = fastpow(2LL,n);
        long long int invdenm = fastpow(denm,mod - 2LL);
        long long int ans = mul(ways,invdenm);
        cout << ans;
           
        cout << '\n';
       
       gettimeofday(&tv2, &tz);

        
        elapsed = (double) (tv2.tv_sec-tv1.tv_sec) + (double) (tv2.tv_usec-tv1.tv_usec) * 1.e-6;
        printf("elapsed time = %f seconds.\n", elapsed);
        }
      }