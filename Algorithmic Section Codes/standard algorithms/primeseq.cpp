 #include <bits/stdc++.h>
    #include<omp.h>
    using namespace std;


    int main()
    {

        int n,i,j;
        int prime[1000];

        cout<<"In order to find prime number from 1 - n enter value of n";
        cin>>n;

        for(i=1;i<=n;i++)
            prime[i]=1;
        prime[1]=0;

        double start,end;
        //start=omp_get_wtime();

        for(i=2;i*i<=n;i++)
        {

            //#pragma omp parallel for
            for(j=i*i;j<=n;j+=i)
            {
                if(prime[j]==1)
                    prime[j]=0;
            }
        }

        //end=omp_get_wtime();
        cout<<"Prime numbers are as follows";
        for(i=1;i<=n;i++)
            if(prime[i])
                cout<<i<<" ";
        //cout<<"---------------Time taken "<<end-start;

        return 0;
    }
